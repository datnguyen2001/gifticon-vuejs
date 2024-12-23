import { defineStore } from "pinia";
import axios from "axios";

export const useFamousBrandStore = defineStore('famous-brand', {
    state: () => ({
        famousBrand: [],
    }),
    actions: {
        async fetchFamousBrand() {
            try {
                const response = await axios.get("https://gifticon.krmedi.vn/api/trademark");
                // Update the correct state property
                this.famousBrand = response.data.data || [];
            } catch (error) {
                console.error("Error fetching famousBrand:", error);
            }
        },
    },
    getters: {
        getFamousBrand: (state) => state.famousBrand,
    },
});
