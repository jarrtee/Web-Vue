import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'   
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
// import 'element-plus/lib/theme-chalk/index.css';  
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { DatePicker } from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css'
//引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
//条码
// import VueBarcode from 'vue3-barcode';
import axios from 'axios'
import './assets/font/font.css'//引用字体
import wlGanntt from 'wl-gantt' // 引用甘特图
import "wl-gantt/lib/wl-gantt.css"

const app = createApp(Main)
app.use(router).use(ElementPlus).use(DatePicker).use(wlGanntt).mount('#main')
app.config.globalProperties.$http = axios


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}