import {  useQuery  } from "@tanstack/react-query"
import ApiRequest from "../../utils/api/Main/ApiRequest"
import { ResultStatusCode } from "../../utils/api/apiTypes"



const getWaterUserPage = async ({pageSize , pageIndex , textSearch , tollAreaId}:{
    pageSize: number,
      pageIndex: number,
      textSearch?:string,
      tollAreaId?: string,
}):Promise<{
    data : any[],
    total :number,
    numOfPage:number,
    
} | undefined> => {
    const res = await  ApiRequest.getWaterUserPage({
        pageSize: pageSize,
        pageIndex: pageIndex,
        textSearch: textSearch,
        tollAreaId: tollAreaId,
      })
      if(
        res.code === ResultStatusCode.success
      ){
        
        const data = res.result.data as Array<any>;
        const total = res.result.total as number;
        const numOfPage = Math.ceil(total / pageSize);
        return { data :data , numOfPage ,  total}
        
      }
      return undefined
}
export default function useContractPaginated({pageSize , pageIndex , textSearch , tollAreaId}:{
    pageSize: number,
      pageIndex: number,
      textSearch?:string,
      tollAreaId?: string,
}){
    return useQuery(
        ['useContractPaginated', pageSize , pageIndex , textSearch , tollAreaId],
        () => getWaterUserPage({pageSize , pageIndex , textSearch , tollAreaId}),{
            keepPreviousData:true
        }
        
      )

}