import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";

const tag = 'WaterPipeCrud';
export default class WaterPipeCrud {
    static GetAll = async (
        token: string,
      ): Promise<ExcuteResult> => {
        console.log( tag +' GetAll :');
    
        const url = '/WaterPipe/all?v=1.0';
        
        const res = await axios.get(url);
        console.log(tag +' data key.length :', Object.keys(res.data).length);
    
        return res.data as ExcuteResult;
      };
}