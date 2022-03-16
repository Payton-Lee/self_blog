import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/iconfont/iconfont.css'
// 导入axios相关
import axios from 'axios'
import 'virtual:windi.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
