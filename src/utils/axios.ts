import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import router from "../router";

const errorHandle = (status: number, other: any) => {
  switch (status) {
    case 400:
      ElMessage({ message: "请求错误(400)", type: "error" });
      break;
    case 401:
      ElMessage({ message: "请登录", type: "error" });
      router.push("/login");
      // localStorage.removeItem('mallos-token');
      break;
    case 403:
      ElMessage({ message: "拒绝访问(403)", type: "error" });
      break;
    case 404:
      ElMessage({ message: "请求出错(404)", type: "error" });
      break;
    case 408:
      ElMessage({ message: "请求超时(408)", type: "error" });
      break;
    case 500:
      ElMessage({ message: "服务器错误(500)", type: "error" });
      break;
    case 501:
      ElMessage({ message: "服务未实现(501)", type: "error" });
      break;
    case 502:
      ElMessage({ message: "网络错误(502)", type: "error" });
      break;
    case 503:
      ElMessage({ message: "服务不可用(503)", type: "error" });
      break;
    case 504:
      ElMessage({ message: "网络超时(504)", type: "error" });
      break;
    case 505:
      ElMessage({ message: "HTTP版本不受支持(505)", type: "error" });
      break;
    default:
      ElMessage({ message: other, type: "error" });
  }
};

const instance = axios.create({
  baseURL: "/",
  timeout: 30000,
  withCredentials: false,
  headers: {
    token: "",
  },
});
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  async (res: AxiosResponse) => {
    if (res.headers["content-type"] === "application/octet-stream") {
      return Promise.resolve(res);
    } else if (res.status === 200) {
      if (res.data?.stateCode === "00000") {
        return Promise.resolve(res.data.data);
      } else {
        ElMessage({ message: res.data?.message, type: "error" });
        return Promise.reject(res);
      }
    } else if (res.request.responseType === "blob") {
      if (res.headers["content-type"] === "application/json") {
        if (!res.headers.msg || res.headers.msg === "") {
          ElMessage({
            message: "unknown exception, please contact administrator",
            type: "error",
          });
        } else {
          ElMessage({
            message: decodeURIComponent(res.headers.msg),
            type: "error",
          });
        }
        return Promise.reject(res);
      }
      return Promise.resolve(res);
    } else {
      ElMessage({
        message: res.data?.message || "接口请求出错",
        type: "error",
      });
      return Promise.reject(res);
    }
    return Promise.resolve(res.data.data);
  },
  (error: any) => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      return Promise.reject(error);
    }
  }
);
// instance.interceptors.response.use(
//     res => {
//         if (res.headers['content-type'] === 'application/octet-stream') {
//             return Promise.resolve(res);
//         } else if (res.status === 200) {
//             //要判断是否请求的地图数据
//             if (Object.prototype.hasOwnProperty.call(res.data, 'UTF8Encoding')) {
//                 return Promise.resolve(res.data);
//             } else {
//                 if (res.data?.stateCode === '00000') {
//                     return Promise.resolve(res.data.data);
//                 } else {
//                     ElMessage({ message: res.data?.message, type: 'error' });
//                     return Promise.reject(res);
//                 }
//             }
//         } else if (res.request.responseType === 'blob') {
//             if (res.headers['content-type'] === 'application/json') {
//                 if (!res.headers.msg || res.headers.msg === '') {
//                     ElMessage({
//                         message: 'unknown exception, please contact administrator',
//                         type: 'error',
//                     });
//                 } else {
//                     ElMessage({
//                         message: decodeURIComponent(res.headers.msg),
//                         type: 'error',
//                     });
//                 }
//                 return Promise.reject(res);
//             }
//             return Promise.resolve(res);
//         } else {
//             ElMessage({
//                 message: res.data?.message || '接口请求出错',
//                 type: 'error',
//             });
//             return Promise.reject(res);
//         }
//     },
//     error => {
//         const { response } = error;
//         if (response) {
//             errorHandle(response.status, response.data.message);
//             return Promise.reject(response);
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );

export default instance;
