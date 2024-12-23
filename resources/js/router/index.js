import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Trademark from "@/pages/Trademark/Trademark.vue";
import ListProduct from "@/pages/ListProduct/ListProduct.vue";
import Shop from "@/pages/Shop/Shop.vue";
import Login from "@/pages/Login/Login.vue";
import Register from "@/pages/Register/Register.vue";

const routes = [
    {
        path: "/dang-nhap",
        component: Login,
        meta: {
            hideHeaderFooter: true,
        },
    },
    {
        path: "/dang-ky",
        component: Register,
        meta: {
            hideHeaderFooter: true,
        },
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/thuong-hieu",
        component: Trademark,
    },
    {
        path: "/co-the-ban-cung-thich",
        component: ListProduct,
    },
    {
        path: "/cua-hang",
        component: Shop,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
