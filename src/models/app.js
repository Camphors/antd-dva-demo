/*
 * @Author: your name
 * @Date: 2020-10-20 14:35:17
 * @LastEditTime: 2020-10-20 15:15:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\app.js
 */


export default {
  namespace: 'app',
  state: {},
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.key !== id)
    },
    'edit'(state, { payload: record }) {
      console.log(state)
      console.log(record)
      // return state.visible = true
      return state.visible
    }
  }
}
