import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

axiosInstance.interceptors.response.use(function (response) {
  if(response.status === 401) {
    // failure logic
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});
