/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../request/http2'; // 导入http中创建的axios实例
import store from '../store'
//import qs from 'qs'; // 根据需求是否导入qs模块,qs模块主要是为了对post请求时提交的数据进行一个qs序列化的处理,如果不进行处理 后端拿不到数据
//import { Search } from 'vant';

const search = {

    submit(data) {
        return axios({
            url: `/api/v1/member/login`,
            method: 'post',
            data
        });
    },

   

}

export default search;