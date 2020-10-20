/*
 * @Author: your name
 * @Date: 2020-10-20 10:08:23
 * @LastEditTime: 2020-10-20 18:33:19
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
      return state.roles.filter(item => item.key !== id)
    },
    'edit'(state, { payload: record }) {
      state.visible = true
      // return state.visible = true
      return { ...state }
    }
  }
}