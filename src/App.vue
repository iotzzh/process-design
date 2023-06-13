<template>
  <div class="body">
    <LogicFlow v-if="cType === 'logicflow'" ref="refLogicFlow"></LogicFlow>
    <LogicFlowBpmn v-else-if="cType === 'logicflow-bpmn'" ref="refLogicFlowBpmn"></LogicFlowBpmn>
    <BPMN v-else-if="cType === 'bpmn'" ref="refBpmn"></BPMN>
    <div v-else>请选择合适的模型：logicflow， logicflow-bpmn， bpmn</div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import LogicFlow from './views/LogicFlow/index.vue';
import LogicFlowBpmn from './views/LogicFlowBPMN/index.vue';
import BPMN from './views/BPMN/index.vue';

const refLogicFlow = ref();
const refLogicFlowBpmn = ref();

const refBpmn = ref();


const cType = ref('logicflow');

onMounted(() => {
  window.processDesign = {
  type: 'logicflow',
  getData: refLogicFlow.value.getData,
  setData: refLogicFlow.value.setData,
  clearData: refLogicFlow.value.clearData,
  use: async function(type) {
    cType.value = type;
    await nextTick();
    this.type = type;
    switch(type) {
      case 'logicflow': {
        this.getData = refLogicFlow.value.getData;
        this.setData = refLogicFlow.value.setData;
        this.clearData = refLogicFlow.value.clearData;
        break;
      }
      case 'logicflow-bpmn': {
        this.getData = refLogicFlowBpmn.value.getData;
        this.setData = refLogicFlowBpmn.value.setData;
        this.clearData = refLogicFlowBpmn.value.clearData;
        break;
      }
      case 'bpmn': {
        this.getData = refBpmn.value.getData;
        this.setData = refBpmn.value.setData;
        this.clearData = refBpmn.value.clearData;
        
        break;
      }
      default: {
        this.getData = function(){};
        this.setData = function(){};
        this.clearData = function(){};
        break;
      }
    }
  },
};

});

</script>


<style scoped>
.body {
  width: 100%;
  height: 100%;
  position: relative;
}

.choose-box {
  position: absolute;
  top: 50%;
  right: 0;
}

.link {
  display: block;
  width: 100px;
  text-align: right;
}

</style>
