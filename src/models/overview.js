import data from "../mock/overview";

/*
 * @Author: your name
 * @Date: 2020-10-23 11:44:20
 * @LastEditTime: 2020-10-23 14:02:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\models\overview.js
 */
import list from '../mock/overview'

export default {
  namespace: 'overview',
  state: {
    list: list.dataList
  }
}