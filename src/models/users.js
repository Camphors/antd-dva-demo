/*
 * @Author: your name
 * @Date: 2020-10-20 10:08:23
 * @LastEditTime: 2020-10-21 15:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\roles.js
 */

import users from '../mock/users'

export default {
  namespace: 'users',
  state: {
    users: users,
    formData: {},
    visible: false
  },
  reducers: {
    'delete'(state, { payload: id }) {
      state.users = state.users.filter(item => item.key !== id)
      return { ...state }
    },
    'showModal'(state, { payload: record }) {
      state.visible = true
      state.formData = record
      return { ...state }
    },
    'submitEdit'(state, { payload: data }) {
      // state.users.forEach((item, index) => {
      //   if (item.key === data.key) {
      //     item = data
      //   }
      // })
      state.visible = false
      return { ...state }
    },
    'hideModal'(state) {
      state.visible = false
      return { ...state }
    }
  }
}