import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const application = createApp(App).use(router);
application.mount("#app");
