import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import AppRouter from './AppRouter.js'

createApp(App).use(AppRouter).mount('#app')
