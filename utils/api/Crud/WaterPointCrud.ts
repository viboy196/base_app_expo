import { ExcuteResult } from "../apiTypes";
import { TypeWaterPointAdd, TypeWaterPointUpdate } from "../../helper/WaterPointHelper";
import axios from "../base/Axios";
const tag = 'WaterPointCrud';
export default class WaterPointCrud {
    static GetAll = async (
        token: string,
      ): Promise<ExcuteResult> => {
        console.log(tag + ' GetAll ');
    
        const url = '/WaterPoint/all?v=1.0';
        
        const res = await axios.get(url);
        console.log(' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
    
    static add = async (
        token: string,
        input : TypeWaterPointAdd
      ): Promise<ExcuteResult> => {
        console.log(tag + ' GetAll ');
    
        const url = '/WaterPoint/add?v=1.0';
        
        const res = await axios.post(url,input );
        console.log(' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
    
      static delete = async (
        token: string,
        input : {id:string , status?:string}
      ): Promise<ExcuteResult> => {
        console.log(tag + ' delete ');
    
        const url = '/WaterPoint/delete?v=1.0';
        
        const res = await axios.post(url,input );
        console.log(' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
      static update = async (
        token: string,
        input : TypeWaterPointUpdate
      ): Promise<ExcuteResult> => {
        console.log(tag + ' GetAll ');
    
        const url = '/WaterPoint/update?v=1.0';
        
        const res = await axios.post(url,input );
        console.log(' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
    
}