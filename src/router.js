/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-26 17:48:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\router.js
 */
import React from 'react';
import IndexPage from './routes/IndexPage';
import Login from './routes/login'
import { BrowserRouter, Link } from "react-router-dom";

const loginUser = window.localStorage.getItem('user')

function RouterConfig({ history }) {
  return (
    <BrowserRouter history={history}>
      { 
        loginUser ? <IndexPage></IndexPage> : <Link to='/login'><Login></Login></Link>
      }
    </BrowserRouter>
  );
}

export default RouterConfig;
