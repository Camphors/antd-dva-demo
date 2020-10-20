/*
 * @Author: your name
 * @Date: 2020-10-20 10:08:23
 * @LastEditTime: 2020-10-20 18:33:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\roles.js
 */

import users from '../mock/users'

export default {
  namespace: 'users',
  state: {
    users: users,
    visible: false
  },
  reducers: {
    'delete'(state, { payload: id }) {
      console.log(state)
      return state.users.filter(item => item.key !== id)
    },
    'edit'(state, { payload: record }) {
      state.visible = true
      // return state.visible = true
      return { ...state }
    }
  }
}