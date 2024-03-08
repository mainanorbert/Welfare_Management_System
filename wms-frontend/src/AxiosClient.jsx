import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://nobertechx.tech/api/',
  // baseURL:'http://127.0.0.1:8000/api/',
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;

