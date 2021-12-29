import { createRouter, createWebHashHistory } from "vue-router"
import HomeIndex from './pages/Home/Index.vue'

import EmployeeIndex from './pages/employee/Index.vue'
import EmployeeForm from './pages/employee/Form.vue'
const routes = [
    { path: '/', component: HomeIndex },
    { path: '/employees', component: EmployeeIndex },
    { path: '/employees/form', component: EmployeeForm },
]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
