import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'normalize.css';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/stylus/index.styl'
createApp(App).use(ElementPlus).mount('#app')
