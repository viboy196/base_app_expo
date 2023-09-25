import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";

const tag = "TransactionCrud";
export default class TransactionCrud {
  static Add = async (input: {
    objectType: string;
    beneficiaryName: string;
    amount: number;
    information?: string;
  }): Promise<ExcuteResult> => {
    const url = `/Transaction/add?v=1.0`;
    console.log(tag + " Add :", url);
    console.log(input);

    const res = await axios.post(url, input);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static getLast = async (
    recordId: string,
    objectType: string
  ): Promise<ExcuteResult> => {
    const url = `/Transaction/last?objectType=${objectType}&recordId=${recordId}&v=1.0`;
    console.log(tag + " Add :", url);

    const res = await axios.get(url);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static GetPage = async (input: {
    search?: string;
    objectType: "AppUser" | "WaterUser";
    recordId: string;
    pageSize: number;
    pageIndex: number;
  }): Promise<ExcuteResult> => {
    const url = `/Transaction/page?${
      input.search ? `search=${input.search}` : ""
    }objectType=${input.objectType}&recordId=${input.recordId}&pageSize=${
      input.pageSize
    }&pageIndex=${input.pageIndex}&v=1.0`;
    console.log(tag + " Add :", url);

    const res = await axios.get(url);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
}
