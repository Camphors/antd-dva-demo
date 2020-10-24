/*
 * @Author: your name
 * @Date: 2020-10-24 18:08:43
 * @LastEditTime: 2020-10-24 18:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\user.js
 */
export default{
  namespace: 'login',
  state: {
    username: '',
    password: ''
  },
  reducers: {
    'login'(state, {payload: data}) {
      return state
    }
  }
}