import axios from '@/utlis/fetch'
export default {
  /**
   * 
   * @param {*} data 
   */
  getshopDetail(data) {
    return axios({
      url: '/Shop/getDetail',
      method: 'POST',
      data,
      responseType:'json'
    })
  }
}
