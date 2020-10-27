/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-27 16:28:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\router.js
 */
import React from 'react';
import IndexPage from './routes/IndexPage';
import Login from './routes/login'
import { BrowserRouter, Link, Router } from "react-router-dom";
import $$ from 'cmn-utils';
import PropTypes from 'prop-types'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from "history"
import createHistory from 'history/createHashHistory'

const loginUser = $$.getStore('user')
const history = createHistory()
function RouterConfig() {
  return (
    <Router history={history}>
      { 
        loginUser ? <IndexPage/> : <Link to='/login'><Login/></Link>
      }
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object
}

export default RouterConfig;
