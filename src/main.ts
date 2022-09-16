import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import DataVVue3 from "@kjgl77/datav-vue3";

const app = createApp(App);

app.use(router).use(DataVVue3).mount("#app");
