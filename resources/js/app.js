import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'swiper/swiper-bundle.css';
import store from "./store";
import { createPinia } from "pinia";

const pinia = createPinia();

const application = createApp(App).use(router);
application.use(store).use(pinia);
application.mount("#app");
