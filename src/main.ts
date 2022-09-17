import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import DataVVue3 from "@kjgl77/datav-vue3";
import '@/assets/scss/index.scss';
import '@/assets/icon/iconfont.css';
// 引入 全局注册组件
import CustomEcharts from '@/components/index';

const app = createApp(App);

app.use(router).use(CustomEcharts).use(DataVVue3).mount("#app");
