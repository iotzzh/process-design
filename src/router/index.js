import { createRouter, createWebHistory } from 'vue-router'
import LogicFlow from '../views/LogicFlow/index.vue'
import LogicFlowBPMN from '../views/LogicFlowBPMN/index.vue'
import BPMN from '../views/BPMN/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/logicflow',
    // },
    // {
    //   path: '/logicflow',
    //   name: 'logicflow',
    //   component: LogicFlow
    // },
    // {
    //   path: '/logicflow-bpmn',
    //   name: 'logicflow-bpmn',
    //   component: LogicFlowBPMN,
    // },
    // {
    //   path: '/bpmn',
    //   name: 'bpmn',
    //   component: BPMN,
    // }
  ]
})

export default router
