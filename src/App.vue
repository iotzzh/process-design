<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="body">
    <RouterView />
    <div class="choose-box">
      <router-link class="link" to="/">LogicFlow</router-link>
      <router-link class="link" to="/logicflow-bpmn">LogicFlowBPMN</router-link>
      <router-link class="link" to="/bpmn">BPMN</router-link>
    </div>
  </div>
</template>

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
