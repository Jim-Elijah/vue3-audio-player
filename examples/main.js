import { createApp } from 'vue'
import App from './App.vue'
import Vue3AudioPlayer from '../packages/index.js'

const app = createApp(App)
app.use(Vue3AudioPlayer)
app.mount('#app')
