import { userService } from '../services';

const user = JSON.parse(localStorage.getItem('user'));
const state = {
    user: user
}

export const authentication = {
    namespaced: true,

    state: user,

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
            },
            )
        }
    },

    mutations: {
        registerRequest(user) {
            state.user = user;
        }
    },
};
