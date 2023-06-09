<template>
    <div class="bpmn-example-container">
      <div id="graph" class="viewport" style="width: 100%; height: 100%;"></div>
      <BpmnPattern :lf="lf" />
      <BpmnIo :lf="lf" />
    </div>

</template>

<script setup>
import LogicFlow from '@logicflow/core';
import BpmnPattern from './Pattern.vue';
import BpmnIo from './io.vue'
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect,
  DndPanel,
  Group
} from '@logicflow/extension';
import { onMounted, ref } from 'vue';

const lf = ref();

const config = {
  stopScrollGraph: true,
  stopZoomGraph: true,
  metaKeyMultipleSelected: true,
  grid: {
    size: 10,
    type: 'dot',
  },
  keyboard: {
    enabled: true,
  },
  snapline: true,
}

onMounted(() => {
    LogicFlow.use(BpmnElement);
    // LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot);
    LogicFlow.use(Control);
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    lf.value = new LogicFlow({
      ...config,
      container: document.querySelector('#graph')
    });
    lf.value.render();
});

const setData = function (data) {
  lf.value.render(JSON.parse(data));
}

const getData = function (data) {
  return JSON.stringify(lf.value.getGraphData());
}


defineExpose({
  setData,
  getData,
});


</script>

<style scoped>
.bpmn-example-container {
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>