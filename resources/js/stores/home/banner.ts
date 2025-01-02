import { defineStore } from "pinia";
import axios from "axios";

export const useBannerStore = defineStore('banner', {
    state: () => ({
        banner: [],
    }),
    actions: {
        async fetchBanners() {
            try {
                const response = await axios.get("/api/banner");
                // Update the correct state property
                this.banner = response.data.data || [];
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        },
    },
    getters: {
        getBanner: (state) => state.banner,
    },
});
