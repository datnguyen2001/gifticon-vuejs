import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'swiper/swiper-bundle.css';

const application = createApp(App).use(router);
application.mount("#app");
