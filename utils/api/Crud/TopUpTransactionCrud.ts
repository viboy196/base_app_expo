import { ExcuteResult } from "../apiTypes";
import axios from "../base/Axios";

const tag = "TopUpTransactionCrud";
export default class TopUpTransactionCrud {
  static Add = async (input: {
    objectType: "AppUser" | "WaterUser";
    remitterName: string;
    amount: number;
    information?: string;
  }): Promise<ExcuteResult> => {
    const url = `/TopUpTransaction/add?v=1.0`;
    console.log(tag + " Add :", url);
    console.log(input);

    const res = await axios.post(url, input);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static getLast = async (
    recordId: string,
    objectType: "WaterUser" | "AppUser"
  ): Promise<ExcuteResult> => {
    const url = `/TopUpTransaction/last?objectType=${objectType}&recordId=${recordId}&v=1.0`;
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
    const url = `/TopUpTransaction/page?${
      input.search ? `search=${input.search}` : ""
    }objectType=${input.objectType}&recordId=${input.recordId}&pageSize=${
      input.pageSize
    }&pageIndex=${input.pageIndex}&v=1.0`;
    console.log(tag + " Add :", url);

    const res = await axios.get(url);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static GetQr = async (id: string): Promise<ExcuteResult> => {
    const url = `/TopUpTransaction/get-qr?id=${id}&v=1.0`;
    console.log(tag + " Add :", url);

    const res = await axios.get(url);
    console.log(tag + " data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
}
