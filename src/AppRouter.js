import { createRouter, createWebHistory } from 'vue-router'

import LoginView from './views/LoginView.vue'

const routes = [
  { name: 'login', path: '/login', component: LoginView },
  {
    path: '/',
    component: () => import('./views/LayoutView.vue'),
    children: [{ name: 'home', path: '', component: () => import('./views/HomeView.vue') }],
  },
]

const AppRouter = createRouter({
  history: createWebHistory(),
  routes,
})

export default AppRouter
