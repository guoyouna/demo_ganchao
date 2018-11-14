import axios from '@/utlis/fetch'
export default {
  /**
   * 
   * @param {*} data 
   * mobile：手机号，
   * password：密码
   * mobile: "15005061564",
      password: "123456"
   */
  // 登录
  userLogin(data) {
    return axios({
      url: '/User/login',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
    // 注册
    userRegist(data) {
      return axios({
        url: '/User/regist',
        method: 'POST',
        data,
        responseType:'json'
      })
    },
  // 个人信息
  userInfo(data) {
    return axios({
      url: '/User/me',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  //更改个人信息
  userUpdate(data) {
    return axios({
      url: '/User/update',
      method: 'POST',
      data,
      responseType:'json'
    })
  },
  // 退出
  userLogout(data) {
    return axios({
      url: '/User/logout',
      method: 'POST',
      data,
      responseType:'json'
    })
  }
}
