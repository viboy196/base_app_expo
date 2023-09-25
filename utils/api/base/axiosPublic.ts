
import axios from "axios";
import { urlBase } from "./urlBase";


export const axiosPublic = axios.create({
    baseURL: urlBase,
    headers: {
      "Content-Type": "application/json",
    },
  });