import { createStore } from 'vuex';
import banner from '@/store/module/banner';
import saleToday from "@/store/module/sale-today.js";

const store = createStore({
    modules: {
        banner,
        saleToday,
    }
});

export default store;
