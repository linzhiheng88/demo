import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import echarts from './utils/echarts';


import './assets/main.css'

const app = createApp(App)

const Echarts:any=echarts

app.config.globalProperties.$echarts = Echarts

app.use(createPinia())
app.use(router)

app.use(createPinia())

app.mount('#app')


