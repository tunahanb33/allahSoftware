import { createStore } from 'vuex';
import rootGetters from './getters';
import rootMutations from './mutations';
import rootActions from './actions';

const store = createStore({
    state: {
        user: null
    },
    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions
})

export default store;