import Http from '@/Http'
// import BaseException from '@/exception/Base'
import Vue from 'vue'

class Base extends Http {
  constructor() {
    super()
  }

  static api_error(data) {
    Vue.$message(data.msg)
  }

  static ajax_error(data) {
    Vue.$message.error(data.message)
  }

  static success(callback, data, vm) {

    /**
     * 204 - 删除成功
     * 201 - 创建或修改成功
     * 200 - 请求成功
     */
    console.log('data', data)
    console.log('vm', vm)
    if (data.status != 200 && data.status != 201 && data.status != 204) {
      this.ajax_error(data.data)
      callback(null, 'error');
      return;
    }

    // if (data.data.status != 200) return this.api_error(data.data);

    callback && callback(data.data);

  }
}

export default Base;
