/*
 * @Author: your name
 * @Date: 2020-10-20 10:08:23
 * @LastEditTime: 2020-10-21 10:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\roles.js
 */

import roles from '../mock/roles'


export default {
  namespace: 'roles',
  state: {
    roles: roles,
    visible: false
  },
  reducers: {
    'delete'(state, { payload: id }) {
      state.roles = state.roles.filter(item => item.key !== id)
      return { ...state }
    },
    'edit'(state, { payload: record }) {
      state.visible = true
      // return state.visible = true
      return { ...state }
    }
  }
}