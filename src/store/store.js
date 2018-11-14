import * as types from '@/store/const'
import { saveToLocal, loadFromLocal, removeFromLocal } from '@/utlis/localStorage'

export default{
  state: {
    token:loadFromLocal('token') ,
    loading:'',
    user:{
      mobile:loadFromLocal('mobile') ,
      password:loadFromLocal('password') ,
    }
  },
  mutations: {
    // 'token'(state, payload) {
      [types.TOKEN](state, payload) {
      state.token = payload
    },
    [types.LOADING](state, payload) {
      state.loading = payload
    },
    [types.USER](state, payload){
        state.user.mobile = payload.mobile;
        state.user.password = payload.password;
      }
  },
  actions: {
    setToken({
      commit
    }, token) {
      // commit('token', token)
      commit(types.TOKEN, token)
    },
    setUser({
      commit
    }, user) {
      // commit('token', token)
      commit(types.USER, user)
    },
    loading({
      commit
    }, loading) {
      commit(types.LOADING, loading)
    },
  },
  getters: {
    getToken(state) {
      return state.token
    }
  }

}