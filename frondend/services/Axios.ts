import axios from 'axios';

export const weatherAPI = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true, 
  });

weatherAPI.interceptors.response.use(
    (response) => {
    
      return response;
    },
    (error) => {
     
      return Promise.reject(error);
    }
  );