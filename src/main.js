import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import store from './store'
import '../src/static/css/custom.css'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')