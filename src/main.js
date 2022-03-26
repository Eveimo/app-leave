import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import element from 'element-plus';
import  locale  from 'element-plus/lib/locale/lang/zh-cn'
createApp(App).use(element,{locale}).mount('#app')
