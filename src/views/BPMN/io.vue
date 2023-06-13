<template>
  <div className="graph-io">
    <span title="下载 XML" @click="downloadXml">
      <img :src="dImage" alt="下载XML" />
    </span>
    <span id="download-img" title="下载图片" @click="downloadImage">
      <img :src="photoImage" alt="下载图片" />
    </span>
    <span id="upload-xml" title="上传 XML">
      <input id="fileInput" type="file" className="upload" @change="uploadXml" />
      <img :src="uploadImage" alt="上传XML" />
    </span>
  </div>
</template>

<script setup>
import { onMounted, toRefs } from 'vue';
import dImage from './img/download.png';
import photoImage from './img/img.png';
import uploadImage from './img/upload.png';
import BpmnModeler from "bpmn-js/lib/Modeler";

const props = defineProps({
  bpmnModeler: { required: true },
  canvas: { required: true }
});

const { bpmnModeler, canvas } = toRefs(props);




function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadImage() {
  bpmnModeler.value.saveSVG(function (err, svg) {
    if (err) {
      console.error('导出 SVG 出错', err);
    } else {
      // 创建一个链接并下载 SVG 文件
      const link = document.createElement('a');
      link.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
      link.download = 'bpmn_diagram.svg';
      link.target = '_blank';
      link.click();
    }
  });
}


function downloadXml() {
  bpmnModeler.value.saveXML({ format: true }, (err, xml) => {
    if (!err) {
      download('npmn-flow.xml', xml);
    }
  });
}



function uploadXml(ev) {
  // const file = (ev.target).files[0];
  // const reader = new FileReader()
  // reader.onload = async (event) => {
  //   if (event.target) {
  //     const xmlR = event.target.result;
  //     // await bpmnModeler.value.destroy();
  //     await bpmnModeler.value.clear();
  //     bpmnModeler.value = new BpmnModeler({
  //       // 设置bpmn的绘图容器
  //       container: canvas.value,
  //     });

  //     bpmnModeler.value.importXML(xmlR, err => {
  //       if (err) {
  //         this.$Message.error("打开模型出错,请确认该模型符合Bpmn2.0规范");
  //       }
  //     });

  //     event.target.result = null //注意上传后要将input的值设为空
  //   }
  // }
  // reader.readAsText(file); // you could also read images and other binaries
}

onMounted(() => {
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.onload = async (event) => {
      if (event.target) {
        const xmlR = event.target.result;
        // await bpmnModeler.value.destroy();
        await bpmnModeler.value.clear();
        bpmnModeler.value = new BpmnModeler({
          // 设置bpmn的绘图容器
          container: canvas.value,
        });

        bpmnModeler.value.importXML(xmlR, err => {
          if (err) {
            this.$Message.error("打开模型出错,请确认该模型符合Bpmn2.0规范");
          }
        });

        fileInput.value = null;
      }
    }
    reader.readAsText(file); // you could also read images and other binaries
  });
});






</script>

<style scoped>
.graph-io {
  position: absolute;
  left: 100px;
  bottom: 10px;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
  padding: 10px;
  display: flex;
}

.graph-io>span {
  margin: 0 5px;
  cursor: pointer;
}

#upload-xml {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}

.upload {
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

.upload::-webkit-file-upload-button {
  cursor: pointer;
}
</style>