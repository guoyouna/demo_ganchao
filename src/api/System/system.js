import axios from '@/utlis/fetch'
export default {
  /**
   * 
   * @param {*} data 
   */
  systemGethome(data) {
    return axios({
      url: '/System/home',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  getCity(data) {
    return axios({
      url: '/System/city',
      method: 'POST',
      data,
      responseType:'json'
    })
  }
}
