import { createApp } from 'vue';
import App from './App.vue';
import './permission';
import './assets/style/index.scss';
import router from '@/router';
import store from '@/store';
import NutUI from "@nutui/nutui";
import { IconFont } from '@nutui/icons-vue'
// 采用按需加载时  此全局css样式，需要删除
import "@nutui/nutui/dist/style.css";
import '@nutui/icons-vue/dist/style_iconfont.css'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(NutUI)
app.use(IconFont)

app.mount('#app');
