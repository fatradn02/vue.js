import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Forms from './views/Forms.vue'

const routes = [
    { path: '/home', component: Dashboard },
    { path: '/froms', component: Forms },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router