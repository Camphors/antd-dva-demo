/*
 * @Author: your name
 * @Date: 2020-10-24 16:40:52
 * @LastEditTime: 2020-10-27 09:57:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\App.js
 */
import React, { Component } from 'react'
import IndexPage from './IndexPage';
import Login from './login'
import Map from './map'
import Overview from './overview'
import Home from './home'
import { Router, Route, Switch } from 'dva/router';

// export default class App extends Component {
//   render() {
//     return (
//       <IndexPage/>
//     )
//   }
// }

export const createRoutes = (app, routesConfig) => {
  console.log(routesConfig(app))
  const routes = routesConfig(app)
}
