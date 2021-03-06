import axios from 'axios';
// import qs from 'qs';
import {baseUrl} from '@/config'
// import router from '@/router'
// import LocalStorage from '@/cache/LocalStorage'

const service = axios.create({
  timeout: 15000, //请求超时时间
});

const version = '';

// service.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// http request 拦截器
service.interceptors.request.use(
  config => {
    config.headers = {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      // 'Authorization': LocalStorage.getItem('token')
    };
    // 发送请求之前
    if (config.method === 'post' || config.method === 'patch'|| config.method === 'put') {
      //如果是FormData类型，重新设置请求头
      if (config.data instanceof FormData) {
        config.headers = {
          'Content-Type': 'multipart/form-data'
        }
      } else {
        //将参数变成  a=xx&b=xx&c=xx这样的参数列表，配合php后台
        // config.data = qs.stringify({
        //   ...config.data
        // });
      }
    }
    // store.dispatch('showLoadingAct');
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


//响应拦截器即异常处理
service.interceptors.response.use(
  response => {
    // store.dispatch('hideLoadingAct');
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break;
        case 401:
          console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      // store.dispatch('hideLoadingAct');
      return Promise.resolve({data: '', error: err})
    }
    return Promise.resolve(err.response)
  });

class Http {

  static getParams(params) {
    let url = params.url;
    let data = params.data;
    const _public = '/public'
    if (url.indexOf('http') === -1) {
      url = `${baseUrl}${version}${url}`;
    }
    if (url.indexOf(_public) === 0) {
      url = `${version}${url.replace(_public, '')}`
      console.log('url', url)
    }
    return { url, data };
  }

  static proxyPromise(method, url, data) {
    let par = {};
    if (['post', 'put', 'patch'].includes(method)) {
      par = data
    }
    if (['get', 'delete'].includes(method)) {
      par = { params: data }
    }
    return new Promise((resolve, reject) => {
      service[method](url, par)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static get(params) {
    let { url, data } = Http.getParams(params);
    return Http.proxyPromise('get', url, data)
  }

  static delete(params) {
    let { url, data } = Http.getParams(params);
    return Http.proxyPromise('delete', url, data)
  }

  static post(params) {
    let { url, data } = Http.getParams(params);
    return Http.proxyPromise('post', url, data)
  }

  static put(params) {
    let { url, data } = Http.getParams(params);
    return Http.proxyPromise('put', url, data)
  }

  static patch(params) {
    let { url, data } = Http.getParams(params);
    return Http.proxyPromise('patch', url, data)
  }

}

export default Http;
