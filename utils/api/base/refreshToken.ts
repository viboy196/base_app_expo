import AsyncStorage from "@react-native-async-storage/async-storage";
import { ExcuteResult, ResultStatusCode } from "../apiTypes";

import { axiosPublic } from "./axiosPublic";
export const refreshTokenFn = async (): Promise<ExcuteResult> => {
    const cacheAuth = await AsyncStorage.getItem("persist:auth");
    console.log("refreshTokenFn" ,cacheAuth);
    
    
    if(cacheAuth === null)
    {
        return {code:'01'}
    }
    let auth = JSON.parse(cacheAuth);
    const userName = auth.userName?.replace('"', "").replace('"', "");
    const password = auth.password?.replace('"', "").replace('"', "");
    const urlLogin = '/AppUser/auth?v=1.0';
    try {
      const response = await axiosPublic.post(urlLogin, {
        userName :userName , 
        password :password
      });
      const res = response.data as ExcuteResult ;
      if(res.code !== ResultStatusCode.success){
        console.log('refreshTokenFn' , res.errorMessage);
        auth.token = undefined;
        await AsyncStorage.setItem("persist:auth" , JSON.stringify(auth));
        return {code:'01'}
      }
      else{
        auth.token = `"${res.result}"`;
      }
      await AsyncStorage.setItem("persist:auth" , JSON.stringify(auth));
     return res
    } catch (error) {
        auth.token = undefined;
        await AsyncStorage.setItem("persist:auth" , JSON.stringify(auth));
        return {code:'01'}
    }
  };
