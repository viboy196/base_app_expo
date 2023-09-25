import axios from "axios";

import {  refreshTokenFn } from "./refreshToken";
import { urlBase } from "./urlBase";
import AsyncStorage from '@react-native-async-storage/async-storage';


axios.defaults.baseURL = urlBase;
axios.defaults.timeout = 10000;
axios.interceptors.request.use(
    async (config) => {
        const cacheAuth = await AsyncStorage.getItem("persist:auth");
        console.log('cacheAuth' , cacheAuth);
        if(cacheAuth === null)
        {
           return config;
        }
        let auth = JSON.parse(cacheAuth)
        let token = auth.token?.replace('"', "").replace('"', "");
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `bearer ${token}`,
            accept:'text/plain',
            "Content-Type": "application/json",
          };
        }
        

  
      return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;
      console.log('response error');
      
  
      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;
  
        const result = await refreshTokenFn();
  
        if (result?.result) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${result?.result}`,
            accept:'text/plain'
          };
        }
        return axios(config);
      }
      return Promise.reject(error);
    }
);

export default axios;