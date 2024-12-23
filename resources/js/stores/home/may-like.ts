import {defineStore} from "pinia";
import axios from "axios";

export const useMayLike = defineStore('may-like', {
    state: () => ({
        mayLike: [],
    }),
    actions: {
        async fetchMayLike() {
            try {
                const response = await axios.get("https://gifticon.krmedi.vn/api/may-like");
                this.mayLike = response.data.data || [];
            } catch (error) {
                console.error("Error fetching mayLike:", error);
            }
        },
    },
    getters: {
        getMayLike: (state) => state.mayLike,
    },
});
