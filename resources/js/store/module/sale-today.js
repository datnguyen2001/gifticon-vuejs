import axios from "axios";

const state = {
    saleToday: [],
}

const mutations = {
    SET_SALE_TODAY(state, saleToday) {
        state.saleToday = saleToday;
    },
}

const actions = {
    async getSaleToday({ commit }) {
        try {
            const response = await axios.get("https://gifticon.krmedi.vn/api/sale-today");
            commit("SET_SALE_TODAY", response.data.data || []); // Handle missing data
        } catch (error) {
            console.error("Error fetching sale today:", error);
        }
    },
}

const getters = {
    saleToday: (state) => state.saleToday,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
