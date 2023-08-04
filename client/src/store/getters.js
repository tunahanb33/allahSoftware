const rootGetters = {
    _getCurrentUser(state) {
        return state.user
    },
    _isAuthenticate(state) {
        return state.user ? true : false
    }
};

export default rootGetters;