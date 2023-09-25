import { typeInputWaterIndex } from "../../../hooks/WaterIndex/useWaterIndexPaginated";
import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";
const tag = 'WaterIndexCrud';
export default class WaterIndexCrud {
    
    
  static getWaterIndexPageByReader = async (
    input :typeInputWaterIndex
  ): Promise<ExcuteResult> => {
    const {year , month , pageIndex , pageSize , search , waterUserId , tollAreaId} = input

    const strSearch = search ? `search=${search}&` : '';
    
    const strWaterUserId = waterUserId ? `waterUserId=${waterUserId}&` : '';
    const strTollAreaId = tollAreaId ? `tollAreaId=${tollAreaId}&` : '';

  
    const url = `/WaterIndex/page?${strSearch}${strWaterUserId}${strTollAreaId}year=${year}&month=${month}&pageSize=${pageSize}&pageIndex=${pageIndex}&v=1.0`;
    
    console.log(`${tag} url:`, url);

    
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
}