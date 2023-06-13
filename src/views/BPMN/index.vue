<template>
    <div id="app">
        <div class="container" style="width: 100%; height: 100%;">
            <!-- 创建一个canvas画布 npmn-js是通过canvas实现绘图的，并设置ref让vue获取到element -->
            <div class="bpmn-canvas" ref="canvas" style="width: 100%; height: 100%;"></div>
            <BpmnIo :bpmnModeler="bpmnModeler" :canvas="canvas" />
        </div>
    </div>
</template>

<script setup>
import { template as bpmnTemplate } from './static'
import BpmnModeler from "bpmn-js/lib/Modeler";
import { onMounted, ref } from 'vue';
import BpmnIo from './io.vue'

const bpmnModeler = ref();
const canvas = ref();

async function createNewDiagram(bpmn) {
    // 将字符串转换成图显示出来;
    bpmnModeler.value.importXML(bpmn, err => {
        if (err) {
            this.$Message.error("打开模型出错,请确认该模型符合Bpmn2.0规范");
        }
    });
}


// 初始化方法
async function init() {
    // // 获取画布 element
    // const canvas = canvas;

    // 创建Bpmn对象
    bpmnModeler.value = new BpmnModeler({
        // 设置bpmn的绘图容器
        container: canvas.value,
    });

    await createNewDiagram(bpmnTemplate); // 将图转换成图显示出来
}


onMounted(() => {
    init();
});

const setData = function (data) {
    createNewDiagram(data);
}

const getData = async function (callback) {
    await bpmnModeler.value.saveXML({ format: true }, (err, xml) => {
        if (!err) {
            callback(xml);
        }
    });
}

const clearData = () =>  {
    bpmnModeler.value.destroy();
    bpmnModeler.value = new BpmnModeler({
        // 设置bpmn的绘图容器
        container: canvas.value,
    });

    bpmnModeler.value.createDiagram();
}



defineExpose({
    setData,
    getData,
    clearData
});
</script>