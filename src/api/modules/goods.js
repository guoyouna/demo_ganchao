import axios from '@/utlis/fetch'
export default {
  /**
   * 
   * @param {*} data 
   */
  getDetail(data) {
    return axios({
      url: '/Goods/getDetail',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  // 加入购物车
  addtoCart(data) {
    return axios({
      url: '/Goods/toCart',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  // 取购物车商品清单列表
  getCart(data) {
    return axios({
      url: '/Goods/getCarts',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  getList(data) {
    return axios({
      url: '/Goods/getList',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  // 商品库存记录
  getLogs(data) {
    return axios({
      url: '/Goods/getLogs',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
}
