import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/index.scss';
import router from '@/router';
import store from '@/store';
import NutUI from "@nutui/nutui";

// 采用按需加载时  此全局css样式，需要删除
import "@nutui/nutui/dist/style.css";
const app = createApp(App)
app.use(store)
app.use(router)
app.use(NutUI)

app.mount('#app');
