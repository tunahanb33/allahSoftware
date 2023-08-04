import { customAxios } from './customAxios';
import store from '../store';

const request = (async (path, payload, states) => {
    states.isLoading.value = true;
    try {
        const res = await customAxios.post(path, payload);
        return res.data.response
        
    } catch (error) {
        if (error.response.status == 401) store.dispatch('logout')
        throw new Error(error)
    }
    finally {
        const { isLoading, _isSubmit} = states;
        isLoading.value = false;
        _isSubmit.value = true;
    }
})

export default request;