import { userService } from '../services';
import router from '@/router';

export const authentication = {
    namespaced: true,

    state: {
        token: localStorage.getItem('token') || '',
        status: ''
    },

    getters: {
        loggedIn: state => !!state.token,
        authStatus: state => state.status,
    },

    actions: {
        register({ commit }, user) {
            commit('registerRequest', user);

            return new Promise((resolve, reject) => {
                userService.register(user)
                    .then(
                        response => {
                            resolve(response);
                        },
                        error => {
                            reject(error);
                        }
                    )
            })
        },
        login({ commit }, payload) {
            return userService.login(payload)
                .then(res => {
                    commit("setToken", res.data.token);
                    router.push('/');
                })
        },
        logout({ commit }) {
            commit("clearUser");
        }
    },

    mutations: {
        registerRequest(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            window.localStorage.setItem("token", token);
        },
        clearUser() {
            window.localStorage.clear();
            location.reload();
        }
    },
};
