import { TypeWaterUser } from "../../helper/waterUserHelper";
import { ExcuteResult, InputRegister, UseWaterRegister } from "../apiTypes";
import axios from "../base/Axios";

// const urlDetail = '/NguoiDung/Detail?v=1.0';
const getUrlDetail = (userName: string) =>
  `/AppUser/detail?userName=${userName}&v=1.0`;

const urlActivateApp = "/App/active-app?v=1.0";

const urlGetTienichAnninhByNguoidung =
  "/CongViec/get-list-congviec-by-system-anninh?v=1.0";

// const urlGetListNoti = '/Noti/get-list-noti?v=1.0';
const getUrlGetListNoti = (typeApp: string): string => {
  return `Noti/get-list-noti?StrTypeApp=${typeApp}&v=1.0`;
};
export default class ApiRequest {
  // export const host = 'http://e874-113-185-51-101.ngrok.io'

  static GetListNoti = async (token: string): Promise<ExcuteResult> => {
    const tag = "GetListNoti";
    const url = getUrlGetListNoti("nhanvien");
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static DetailInfoNguoiDung = async (
    token: string,
    userName: string
  ): Promise<ExcuteResult> => {
    const tag = "DetailInfoNguoiDung";
    const urlDetail = getUrlDetail(userName);
    console.log(`${tag} url:`, urlDetail);

    const res = await axios.get(urlDetail);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static getReadMeterPeriodPageByReader = async (
    token: string,
    year: number,
    month: number,
    pageIndex: number
  ): Promise<ExcuteResult> => {
    const tag = "ReadMeterPeriodPageByReader";
    const url = `/ReadMeterPeriod/page-by-reader?year=${year}&month=${month}&pageSize=10&pageIndex=${pageIndex}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getAllUseWaterRegister = async (
    token: string
  ): Promise<ExcuteResult> => {
    const tag = "getAllUseWaterRegister";
    const url = `/UseWaterRegister/all?v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getDetailProvince = async (id: string): Promise<string> => {
    const tag = "getDetailProvince";
    const url = `/Province/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data.result.name as string;
  };

  static getDetailDistrict = async (id: string): Promise<string> => {
    const tag = "getDetailProvince";
    const url = `/District/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data.result.name as string;
  };

  static getDetailWard = async (id: string): Promise<string> => {
    const tag = "getDetailProvince";
    const url = `/Ward/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data.result.name as string;
  };
  static getWaterUserAll = async (token: string): Promise<ExcuteResult> => {
    const tag = "getWaterUserAll";
    const url = "/WaterUser/all?v=1.0";
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterUserPage = async (input: {
    pageIndex: number;
    pageSize: number;
    textSearch?: string;
    tollAreaId?: string;
  }): Promise<ExcuteResult> => {
    const tag = "getWaterUserPage";
    const url = `/WaterUser/page?pageSize=${input.pageSize}&pageIndex=${
      input.pageIndex
    }${input.textSearch ? `&search=${input.textSearch}` : ""}${
      input.tollAreaId ? `&tollAreaId=${input.tollAreaId}` : ""
    }&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterIndexPage = async (input: {
    token: string;
    year: number;
    month: number;
  }): Promise<ExcuteResult> => {
    const tag = "getWaterIndexPage";
    const url = `/WaterIndex/page?year=${input.year}&month=${input.month}&pageSize=10&pageIndex=1&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static getWaterUserDetail = async (id: string): Promise<ExcuteResult> => {
    const tag = "getWaterUserDetail";
    const url = `/WaterUser/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterUserAllByTollarea = async (data: {
    token: string;
    tollAreaId: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetWaterUserAllByTollarea";
    const url = `/WaterUser/all-by-tollarea?tollAreaId=${data.tollAreaId}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getWaterInvoiceAllByTollarea = async (data: {
    token: string;
    tollAreaId: string;
  }): Promise<ExcuteResult> => {
    const month = new Date().getMonth() + 1;

    const year = new Date().getFullYear();

    const tag = "getWaterInvoiceAllByTollarea";
    const url = `/WaterInvoice/page?year=${year}&month=${month}&tollAreaId=${data.tollAreaId}&pageSize=100&pageIndex=1&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getAllWaterUserByUser = async (
    token: string,
    userName: string
  ): Promise<ExcuteResult> => {
    const tag = "getAllWaterUserByUser";
    const url = `/WaterUser/all-by-user?userName=${userName}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static WaterIndexAllByWaterUser = async (data: {
    token: string;
    waterUserId: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetWaterInvoiceAllByWateruser";

    const url = `/WaterIndex/all-by-wateruser?waterUserId=${data.waterUserId}&v=1.0`;

    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static TollAreaDetail = async (id: string): Promise<ExcuteResult> => {
    const tag = "TollAreaDetail";
    const url = `/TollArea/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };
  static UnitTypeDetail = async (id: string): Promise<ExcuteResult> => {
    const tag = "TollAreaDetail";
    const url = `/UnitType/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };

  static genNewCodeByTollAreaId = async (
    tollAreaId: string
  ): Promise<ExcuteResult> => {
    const tag = "TollAreaDetail";
    const url = `/WaterUser/new-code?tollAreaId=${tollAreaId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };

  static WaterIndexAllByWateruser = async (
    token: string,
    waterUserId: string
  ): Promise<ExcuteResult> => {
    const tag = "DetailInfoNguoiDung";
    const url = `/WaterIndex/all-by-wateruser?waterUserId=${waterUserId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };

  static WaterInvoiceAllByWaterUser = async (
    token: string,
    waterUserId: string
  ): Promise<ExcuteResult> => {
    const tag = "WaterInvoiceAllByWaterUser";
    const url = `/WaterInvoice/all-by-wateruser?waterUserId=${waterUserId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };
  static WaterInvoiceDetailByWaterUserYearMonth = async (
    token: string,
    waterUserId: string,
    year: string,
    month: string
  ): Promise<ExcuteResult> => {
    const tag = "WaterInvoiceAllByWaterUser";
    const url = `/WaterInvoice/detail-by-wateruser-year-month?waterUserId=${waterUserId}&year=${year}&month=${month}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };

  static DetailWaterIndex = async (
    token: string,
    id: string
  ): Promise<ExcuteResult> => {
    const tag = "detailWaterIndex";
    const url = `/WaterIndex/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, res.data);
    return res.data as ExcuteResult;
  };
  static GetListCongviecBySystemAnninh = async (data: {
    token: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetListCongviecBySystemAnninh";
    const url = urlGetTienichAnninhByNguoidung;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static ActivateApp = async (input: {
    tokenAuth: string;
    tokenFirebase: string;
    typeApp: string;
  }): Promise<ExcuteResult> => {
    console.log("urlActivateApp ", urlActivateApp);

    const tag = "ActivateApp";
    const config = {
      headers: {
        Authorization: `bearer ${input.tokenAuth}`,
        accept: "text/plain",
      },
    };

    const bodyParameters = {
      token: input.tokenFirebase,
      typeApp: input.typeApp,
    };
    const res = await axios.post(urlActivateApp, bodyParameters);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
  static LoginApi = async (input: {
    phone: string;
    password: string;
  }): Promise<ExcuteResult> => {
    const url = "/AppUser/auth?v=1.0";
    console.log("url ", url);
    console.log(axios.defaults.baseURL);

    console.log("input :", input);
    const config = {
      headers: {
        "Content-Type": `application/json`,
        accept: "text/plain",
      },
    };

    const res = await axios.post(url, {
      userName: input.phone,
      password: input.password,
    });
    console.log(res.data);
    return res.data as ExcuteResult;
  };
  static ChangeWaterFactory = async (input: {
    userName: string;
    waterFactoryId: string;
    token: string;
  }): Promise<ExcuteResult> => {
    console.log("ChangeWaterFactory ");
    const url = "/AppUser/change-water-factory?v=1.0";
    const tag = "ChangeWaterFactory";
    const config = {
      headers: {
        Authorization: `bearer ${input.token}`,
        accept: "text/plain",
      },
    };

    const bodyParameters = {
      userName: input.userName,
      waterFactoryId: input.waterFactoryId,
    };
    const res = await axios.post(url, bodyParameters);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static WaterIndexAdd = async (data: {
    token: string;
    waterUserId: string;
    year: string;
    month: string;
    waterMeterNumber: string;
    image?: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetWaterInvoiceAllByWateruser";
    const url = "/WaterIndex/add?v=1.0";
    console.log(`${tag} url:`, url);

    const config = {
      headers: {
        Authorization: `bearer ${data.token}`,
        accept: "text/plain",
      },
    };

    const bodyParameters = {
      waterUserId: data.waterUserId,
      year: data.year,
      month: data.month,
      waterMeterNumber: data.waterMeterNumber,
      image: data.image,
    };

    const res = await axios.post(url, bodyParameters);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static RegisterApi = async (input: InputRegister): Promise<ExcuteResult> => {
    const urlRegister = "/AppUser/register?v=1.0";
    console.log("urlRegister ", urlRegister);
    const res = await axios.post(urlRegister, input);
    console.log(res.data);
    return res.data as ExcuteResult;
  };

  static TollAreaByReader = async (data: {
    token: string;
    userId: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetListTollAreaByReader";
    const url = `/TollArea/all-by-reader?userId=${data.userId}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static TollAreaByPage = async (data: {
    pageIndex: number;
    pageSize: number;
  }): Promise<ExcuteResult> => {
    const tag = "TollAreaByPage";
    const url = `/TollArea/page?pageSize=${data.pageSize}&pageIndex=${data.pageIndex}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static AppRoleGetByUser = async (input: {
    token: string;
    userId: string;
  }): Promise<ExcuteResult> => {
    const tag = "AppRoleGetByUser";
    const url = `/AppRole/get-by-user?userId=${input.userId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static WaterUserAllByTollarea = async (data: {
    token: string;
    tollAreaId: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetWaterUserAllByTollarea";
    const url = `/WaterUser/all-by-tollarea?tollAreaId=${data.tollAreaId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static WaterUserDetailByWaterMeterCode = async (data: {
    waterMeterCode: string;
  }): Promise<ExcuteResult> => {
    const tag = "WaterUserDetailByWaterMeterCode";
    const url = `/WaterUser/detail-by-water-meter-code?waterMeterCode=${data.waterMeterCode}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static GetProvinceAll = async (): Promise<ExcuteResult> => {
    const tag = "GetProvinceAll";
    const url = "/Province/all?v=1.0";
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetDistrictByProvinceId = async ({
    provinceId,
  }: {
    provinceId: string;
  }): Promise<ExcuteResult> => {
    const tag = "GetDistrictByProvinceId";
    const url = `/District/get-by-provinceId?provinceId=${provinceId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetWardByDistrictId = async ({
    districtId,
  }: {
    districtId?: string;
  }): Promise<ExcuteResult> => {
    if (districtId === undefined) {
      return {};
    }
    const tag = "GetDistrictByProvinceId";
    const url = `/Ward/get-by-districtId?districtId=${districtId}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static GetTollAreaByWard = async ({
    wardId,
  }: {
    wardId?: string;
  }): Promise<ExcuteResult> => {
    if (wardId === undefined) {
      return {};
    }
    const tag = "GetTollAreaByWard";
    const url = `/TollArea/all-by-ward?wardId=${wardId}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static PostUseWaterRegisterAdd = async (
    input: UseWaterRegister
  ): Promise<ExcuteResult> => {
    console.log("PostUseWaterRegisterAdd ");
    console.log(input);

    const url = "/UseWaterRegister/add?v=1.0";

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
  static GetWaterFactoryAll = async (): Promise<ExcuteResult> => {
    const tag = "GetWaterFactoryAll";
    const url = "/WaterFactory/all?v=1.0";
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static GetWaterFactoryDetail = async (id: string): Promise<ExcuteResult> => {
    const tag = "GetWaterFactoryDetail";
    const url = `/WaterFactory/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);

    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getFullName = async (
    userName: string = "",
    cccd: string = ""
  ): Promise<ExcuteResult> => {
    const tag = "getFullName";
    const url = `/AppUser/get-fullname?userName=${userName}&cccd=${cccd}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(res.data);

    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static GetUnitTypeAll = async (): Promise<ExcuteResult> => {
    const tag = "GetUnitTypeAll";
    const url = "/UnitType/all?v=1.0";
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };
  static GetTollAreaAll = async (): Promise<ExcuteResult> => {
    const tag = "GetTollAreaAll";
    const url = "/TollArea/all?v=1.0";
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static GetTollAreaDetail = async (id: string): Promise<ExcuteResult> => {
    const tag = "GetTollAreaAll";
    const url = `/TollArea/detail?id=${id}&v=1.0`;
    console.log(`${tag} url:`, url);
    const res = await axios.get(url);
    console.log(`${tag} data key.length :`, Object.keys(res.data).length);
    return res.data as ExcuteResult;
  };

  static getNewWaterCode = async (): Promise<ExcuteResult> => {
    console.log("getNewWaterCode ");

    const url = "/WaterUser/new?v=1.0";

    const res = await axios.get(url);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static getWaterUserByCode = async (code: string): Promise<ExcuteResult> => {
    console.log("CheckNewWaterCode ");

    const url = `/WaterUser/code?code=${code}&v=1.0`;

    const res = await axios.get(url);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static PostWaterUserAdd = async (
    input: TypeWaterUser
  ): Promise<ExcuteResult> => {
    console.log("PostWaterUserAdd ");

    const url = "/WaterUser/add?v=1.0";
    const bodyParameters = {
      ...input,
    };

    console.log("input", input);
    const res = await axios.post(url, bodyParameters);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static PostWaterUserUpdate = async (
    input: TypeWaterUser
  ): Promise<ExcuteResult> => {
    console.log("PostWaterUserAdd ");

    const url = "/WaterUser/update?v=1.0";
    console.log("input", input);

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };

  static PostWaterUserUpdateImage = async (
    input: { id: string; images: string[] },
    token: string
  ): Promise<ExcuteResult> => {
    console.log("PostWaterUserAdd ");

    const url = "/WaterUser/update-image?v=1.0";

    const bodyParameters = {
      ...input,
    };
    const res = await axios.post(url, bodyParameters);
    console.log(" data key.length :", Object.keys(res.data).length);

    return res.data as ExcuteResult;
  };
}
