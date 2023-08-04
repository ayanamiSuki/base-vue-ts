import { createApp } from 'vue'
// 引入 vue-router
import router from './router'
// 引入全局scss
import './assets/scss/index.scss'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
