import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";

const tag = 'MediaCrud';
export default class MediaCrud {
    static GetAllImageContract = async (
        idWaterUser?:string
      ): Promise<ExcuteResult> => {
       
    
        const url = `Media/all?objectType=WaterUser&referenceId=${idWaterUser}&v=1.0`;
        console.log( tag +' GetAll :' ,url);
        
        const res = await axios.get(url);
        console.log(tag +' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
}