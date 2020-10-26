/*
 * @Author: your name
 * @Date: 2020-10-26 16:52:28
 * @LastEditTime: 2020-10-26 17:01:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\services\login.js
 */

import $$ from 'cmn-utils';

export async function login(payload) {
  return {
    status: true,
    message: '登录成功',
    data: payload
  }
  // return $$.post('/user/login', payload)
}