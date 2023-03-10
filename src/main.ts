import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementPlus from "element-plus";
import "@/assets/scss/style.scss";
import "element-plus/dist/index.css";
import "normalize.css/normalize.css";
import "flag-icon-css/css/flag-icons.css";
const app = createApp(App);

// 挂载pinia
app.use(store);
//挂在路由
app.use(router);
//挂载elementPlus
app.use(ElementPlus, {
  size: "small",
});

// 挂载实例
app.mount("#app");
