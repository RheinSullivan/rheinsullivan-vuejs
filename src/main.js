import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(MotionPlugin);
app.use(router);
app.mount("#app");
