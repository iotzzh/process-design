<template>
  <div className="graph-io">
    <span title="下载 XML" @click="downloadXml">
      <img :src="dImage" alt="下载XML" />
    </span>
    <span id="download-img" title="下载图片" @click="downloadImage">
      <img :src="photoImage" alt="下载图片" />
    </span>
    <span id="upload-xml" title="上传 XML">
      <input type="file" className="upload" @change="uploadXml" />
      <img :src="uploadImage" alt="上传XML" />
    </span>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import dImage from './img/download.png';
import photoImage from './img/img.png';
import uploadImage from './img/upload.png';


const props = defineProps({
  lf: { required: true },
});

const { lf } = toRefs(props);

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
  lf.value.getSnapshot();
}

function downloadXml() {
  const data = lf.value.getGraphData();
  download('logic-flow.xml', data);
}

function uploadXml(ev) {
  const file = (ev.target).files[0];
  const reader = new FileReader()
  reader.onload = (event) => {
    if (event.target) {
      const xml = event.target.result;
      lf.value.render(xml);
    }
  }
  reader.readAsText(file); // you could also read images and other binaries
}

</script>

<style scoped>
.graph-io {
  position: absolute;
  left: 10px;
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