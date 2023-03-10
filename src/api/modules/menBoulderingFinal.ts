import request from "@/utils/axios";
import Constant from "../constant";

/**
 * 登录
 */

interface IResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const getMenBoulderingFinal = () => {
  return request({
    url: Constant.getMenBoulderingFinal,
    method: "post",
    data: {},
  })
    .then((res) => {
      return res;
    })
    .catch((res) => {
      console.log(res);
    });
};
export const getMenBoulderingFinalN = () => {
  return request({
    url: Constant.getMenBoulderingFinal,
    method: "post",
    data: {},
  })
    .then((res) => {
      return res;
    })
    .catch((res) => {
      console.log(res);
    });
};
