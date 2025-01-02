import {defineStore} from "pinia";
import axios from "axios";

export const usePopular = defineStore('popular', {
    state: () => ({
        popular: [],
    }),
    actions: {
        async fetchPopular() {
            try {
                const response = await axios.get("/api/product-sort-by-category");
                this.popular = response.data.data || [];
            } catch (error) {
                console.error("Error fetching popular:", error);
            }
        },
    },
    getters: {
        getPopular: (state) => state.popular,
    },
});
