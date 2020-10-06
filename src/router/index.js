import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

// 将vue挂载到全局
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            keepalive: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router