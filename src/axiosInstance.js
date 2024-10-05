import axios from 'axios';
import { BACKEND_URL } from './urlfile';

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
