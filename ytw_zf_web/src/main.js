
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../public/normalize.css';

import App from './App.vue'
import router from './router'
import VueCookies from "vue3-cookies";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(VueCookies)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)  //全局注册element-plus

app.mount('#app')
