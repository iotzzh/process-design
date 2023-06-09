import './assets/main.css'
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
