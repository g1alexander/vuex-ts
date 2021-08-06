import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import "./styles/app.css";

const app = createApp(App);
// app.config.performance = true;
app.use(store);
app.use(router);
app.mount("#app");
