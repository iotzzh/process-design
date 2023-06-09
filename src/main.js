import './assets/main.css'

// bpmn.js
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// 左边工具栏以及编辑节点的样式
import 'bpmn-js-properties-panel/dist/assets/element-templates.css'; // 工具栏样式
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css'; // 工具栏样式

import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
