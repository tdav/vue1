import { createStore } from 'vuex';

export default createStore({
    state: {
        FIO: '', // Bitta o'zgaruvchi
    },

    getters: {
        gts_fullName(state) {
            return state.FIO; // Getter orqali to'g'ridan-to'g'ri fullName ni qaytaradi
        }
    },

    actions: {
        ACTION_SET_NAME({ commit }, payload) { 
            commit('setName', payload);
        },
    },

    mutations: {
        setName(state, payload) {
            state.FIO = `${payload.ism} ${payload.familya}`; // fullName ni yangilash
        },
    }
});
