import axios from "axios";

const state = {
    banners: [],
};

const mutations = {
    SET_BANNERS(state, banners) {
        state.banners = banners;
    },
};

const actions = {
    async getBanners({ commit }) {
        try {
            const response = await axios.get("/api/banner");
            commit("SET_BANNERS", response.data.data || []); // Handle missing data
        } catch (error) {
            console.error("Error fetching banners:", error);
        }
    },
};

const getters = {
    banners: (state) => state.banners,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

