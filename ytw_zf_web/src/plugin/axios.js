import axios from 'axios';
import {userInfoStore} from "@/stores/counter.js";
import {useRouter} from "vue-router";
import { baseURL,timeout } from "@/config/conf.js";

let config = {
    baseURL: baseURL,
    timeout: timeout,
    headers: {
        'Content-Type': 'application/json',

    }
}
const _axios = axios.create(config)
const router = useRouter()
// 拦截器
_axios.interceptors.response.use(function (response) {
    // console.log("来自响应拦截器", response)
    // if (response.data.code === "1003") {
    //     router.replace({name: "login"})
    // }
    // return response
// }, function (error) {
// // 此方法类似.then  当你响应的状态码不是401 那么会走这断逻辑
//     console.log("拦截器异常 ", error)
//     return error

    return response


})

export default _axios;  // 到处已经添加过初始内容的axios类