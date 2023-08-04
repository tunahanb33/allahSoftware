import { customAxios } from '../utils/customAxios';
import router from '../router';
const rootActions = {
    getUser(context) {
        const token = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            customAxios(`/auth/getuser/${token}`)
                .then(res => {
                    context.commit('setUser', res.data.username)
                    router.push('/')
                    resolve(res)
                })
                .catch(err => {
                    localStorage.removeItem('token');
                    window.location.reload();
                    reject(err);
                })
        })
    },

    logout(context) {
        context.commit('setUser', null);
        localStorage.removeItem('token');
        router.go(0);
    }
}

export default rootActions