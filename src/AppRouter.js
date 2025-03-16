import { createRouter, createWebHistory } from 'vue-router'

import LoginView from './views/LoginView.vue'

const routes = [
  { name: 'login', path: '/login', component: LoginView },
  {
    path: '/',
    component: () => import('./views/LayoutView.vue'),
    children: [{ name: 'main', path: '', component: () => import('./views/MainView.vue') }],
  },
]

const AppRouter = createRouter({
  history: createWebHistory('/show-boardgames-score/'),
  routes,
})

export default AppRouter
