/*
 * @Author: your name
 * @Date: 2020-10-24 18:08:43
 * @LastEditTime: 2020-10-26 18:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\user.js
 */
import { routerRedux } from 'dva/router'
import $$ from 'cmn-utils';
import { login } from '../services/login'

export default{
  namespace: 'login',
  state: {
    loginData: {
      username: 'admin',
      password: 'admin'
    }
  },
  // reducers: {
  //   'login'(state, {payload: data}) {
  //     state.loginData.username = data.username
  //     state.loginData.password = data.password
  //     localStorage.setItem('user', data.username)
  //     localStorage.setItem('password', data.password)
  //     routerRedux.replace('/')
  //     return state
  //   },
  //   'logout'(state, {payload: data}) {
  //     localStorage.removeItem('user')
  //     console.log('logout')
  //     return state
  //   }
  // },
  effects: {
    *login({ payload}, { call, put }) {
      const { status, message, data } = yield call(login, payload);
      try {
        if (status) {
          $$.setStore('user', payload)
          yield put(routerRedux.push({pathname: '/home'}))
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}