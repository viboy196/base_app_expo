import { typeInputReadMeterPeriod } from "../../../hooks/ReadMeterPeriod/useReadMeterPaginated";
import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";
const tag = 'ReadMeterPeriodCrud';
export default class ReadMeterPeriodCrud {
    
    
  static getReadMeterPeriodPageByReader = async (
    input :typeInputReadMeterPeriod
  ): Promise<ExcuteResult> => {
    const {year , month , pageIndex , pageSize , search} = input
  
    const url = `/ReadMeterPeriod/page-by-reader?${ search ? `search=${search}` : ''}year=${year}&month=${month}&pageSize=${pageSize}&pageIndex=${pageIndex}&v=1.0`;
    
    console.log(`${tag} url:`, url);

    
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
}