import axios from '@/utlis/fetch'
export default {
  /**
   * 
   * @param {*} data 
   */
  orderGetList(data) {
    return axios({
      url: '/Order/getList',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  //订单提交
  ordersubmit(data) {
    return axios({
      url: '/Order/submit',
      method: 'POST',
      data,
      responseType:'json'
    })
  }
}
