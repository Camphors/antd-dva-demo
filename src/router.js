/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-19 16:29:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\router.js
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <IndexPage></IndexPage>
  );
}

export default RouterConfig;
