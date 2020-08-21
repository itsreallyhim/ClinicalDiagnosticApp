import Vue from 'vue'
import Vuex from "vuex"


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cdat: null,
        loading: false,
        user: {
            loggedIn: false
        }
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        }
    },
    getters: {
        cdat: state => {
            return state.cdat
        },
        loading: state => {
            return state.loading
        },
        user: state => {
            return state.user.loggedIn
        }
    },
    actions: {
        loadCDAT: ({ commit }) => {
            commit('setLoading', true);
            fetch('/cdat')
        }
    }
})