import axios from 'axios';
const token = localStorage.getItem('token');

export const customAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        Authorization: token
    }
})