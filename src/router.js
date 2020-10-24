/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-24 17:51:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\router.js
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import App from './routes/App'
import Login from './routes/login'
import { HashRouter, BrowserRouter, Link } from "react-router-dom";
import createHistory from 'history/createHashHistory'

const loginUser = window.localStorage.getItem('user')
console.log('11'+loginUser)

const history = createHistory()
function RouterConfig({ history }) {
  return (
    // <BrowserRouter>
    //  <HashRouter history={history}>
    //     <App/>
    //     {/* <Route path="/" component={App}></Route> */}
    //   </HashRouter>
    // </BrowserRouter> 
    // <Router history={history}>
    <BrowserRouter>
      <HashRouter history={history}>
        { 
          loginUser ? <IndexPage></IndexPage> : <Link to='/login'><Login></Login></Link>
        }
        {/* <Link to='/login'><Login></Login></Link>
        <IndexPage></IndexPage> */}
      </HashRouter>
    </BrowserRouter>
    // </Router> 
  );
}

export default RouterConfig;
