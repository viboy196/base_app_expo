import { TypeWaterUser } from "../../helper/waterUserHelper";
import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";
const tag = 'waterUserCrud';
export default class WaterUserCrud {
    
    
  // static getwaterUserPageByReader = async (
  //   input :typeInputwaterUser
  // ): Promise<ExcuteResult> => {
  //   const {year , month , pageIndex , pageSize , search} = input
  
  //   const url = `/waterUser/page-by-reader?${ search ? `search=${search}` : ''}year=${year}&month=${month}&pageSize=${pageSize}&pageIndex=${pageIndex}&v=1.0`;
    
  //   console.log(`${tag} url:`, url);

    
  //   const res = await axios.get(url);
  //   console.log(`${tag} data key.length :`, Object.keys(res.data).length);
  //   return res.data as ExcuteResult;
  // };

  static PostWaterUserUpdate = async (
    input: TypeWaterUser,
  ): Promise<ExcuteResult> => {
    console.log('PostWaterUserAdd ');

    const url = '/WaterUser/update?v=1.0';
    console.log('input', input);
    
    

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters);
    console.log(' data key.length :', Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
}