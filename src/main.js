import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import '@/gpt/gpt-ads.css'
import { initGptGlobalHooks } from '@/gpt/ads'

initGptGlobalHooks()

createApp(App).use(router).mount('#app')
