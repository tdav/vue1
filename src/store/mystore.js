import { reactive, readonly, computed } from "vue";

const state = reactive({
  keyWord: "good"
});

function changeKeyWord(value) {
  state.keyWord = value;
}

const upperCasedKeyWord = computed(() => state.keyWord.toUpperCase());

export const store = readonly({
  state,
  changeKeyWord,
  upperCasedKeyWord
});



import { createStore } from "vuex";

const store = createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",

  state: {
    size: {},
    loading: false,
    isMiniMenu: localStorage.getItem("IS_MINI_MENU") == 'true'
  },

  mutations: {
    SET_SIZE(state, payload) {
      state.size = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_IS_MINI_MENU(state, payload) {
      localStorage.setItem("IS_MINI_MENU", payload)
      state.isMiniMenu = payload;
    },
  },

  actions: {
    async INIT_STATES({ dispatch }) {
      await dispatch('auth/INIT')
    },
    SET_SIZE({ commit }, payload) {
      commit("SET_SIZE", payload);
    },
    SET_LOADING({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
  },

  getters: {
    GET_SIZE: (state) => state.size,
    GET_LOADING: (state) => state.loading,
    GET_IS_MINI_MENU: (state) => state.isMiniMenu,
  },
});

export default store;