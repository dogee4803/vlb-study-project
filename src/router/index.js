import { createWebHistory, createRouter } from 'vue-router'

import Register from '../pages/auth/Register.vue'
import Login from '../pages/auth/Login.vue'
import ApplyPage from '../pages/ApplyPage.vue'

const routes = [
  { path: '/sign-up', component: Register },
  { path: '/sign-in', component: Login },
  { path: '/apply_form', component: ApplyPage},
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;