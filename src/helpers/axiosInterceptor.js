import AsyncStorage from '@react-native-community/async-storage';
import axois from 'axios';
import evns from '../config/env';

let headers = {};

const axiosInstance = axois.create({
  baseURL: evns.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
