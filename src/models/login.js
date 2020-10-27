/*
 * @Author: your name
 * @Date: 2020-10-24 18:08:43
 * @LastEditTime: 2020-10-27 16:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\user.js
 */
import { routerRedux } from 'dva/router'
import $$ from 'cmn-utils';
import { login } from '../services/login'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

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
          $$.setStore('user', JSON.stringify(payload))
          history.push("/home");
          history.go()
          // yield put(routerRedux.push({pathname: '/home'}))
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}