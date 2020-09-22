import config from 'config';
const axios = require('axios');

export const userService = {
	register
};

async function register(user) {
    try {
        await axios.post(`${config.apiUrl}/users/register`, user)
    }
    catch (error) {
        return Promise.reject(error.response.data.errors)
    }
}
