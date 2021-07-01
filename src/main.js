import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus';
import 'normalize.css';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/stylus/index.styl'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).app.use(VueRouter).use(ElementPlus).mount('#app')
