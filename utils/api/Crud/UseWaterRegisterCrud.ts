import { typeInputUseWaterRegister } from "../../../hooks/UseWaterRegister/useUseWaterRegisterPaginated";
import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";
const tag = "UseWaterRegisterCrud";
export default class UseWaterRegisterCrud {
  static getUseWaterRegisterPageByReader = async (
    input: typeInputUseWaterRegister
  ): Promise<ExcuteResult> => {
    const { pageIndex, pageSize, search } = input;
    const strSearch = search ? `search=${search}&` : "";
    const url = `/UseWaterRegister/page?${strSearch}&pageSize=${pageSize}&pageIndex=${pageIndex}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static delete = async (input: { id: string }): Promise<ExcuteResult> => {
    const url = "/UseWaterRegister/delete?v=1.0";
    console.log(`${tag} url:`, url);
    const res = await axios.post(url, input);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
}
