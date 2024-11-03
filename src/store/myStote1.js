import { createStore } from 'vuex'

export default createStore({

    // state - элон килиш
    state: {
        count: 1,
    },

    // getters
    getters: {
        gts_count(state) {
            return state.count
        }        
    },

    // actions
    actions: {
        ACTION_INC({ commit }) {
            commit('increment')
        },

        ACTION_M5({ commit }) {
            commit('mul6')
        }, 

        ACTION_MX({ commit }, x) {
            commit('mutX', x)
        }

    },


    // mutations
    mutations: {
        increment(state) {
            state.count++
        },

        mul6 (state){
            state.count = state.count *5
        },

        mutX (state, x){
            state.count = state.count * x
        },

        
    }
})
