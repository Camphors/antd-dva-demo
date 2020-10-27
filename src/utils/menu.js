/*
 * @Author: your name
 * @Date: 2020-10-19 15:25:49
 * @LastEditTime: 2020-10-27 16:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\utils\menu.js
 */
import Login from '../routes/login'
import DashBoard from '../routes/home'
import Map from '../routes/map'
import Overview from '../routes/overview'
import Users from '../routes/auth/users'
import Roles from '../routes/auth/roles'
import Details from '../routes/details'
 
const menu = [
  {
    path: '/login',
    key: 'login',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    key: 'dashboard',
    name: '数据概览',
    component: DashBoard
  },
  {
    path: '/map',
    key: 'map',
    exact: true,
    name: '数据地图',
    component: Map
  },
  {
    path: '/overview',
    key: 'overview',
    exact: true,
    name: '数据总览',
    // icon: DownOutlined,
    component: Overview
  },
  {
    path: '/details',
    exact: true,
    key: 'details',
    component: Details
  },
  {
    path: '/auth',
    key: 'auth',
    name: '权限管理',
    redirect: '/auth/users',
    component: Users,
    children: [{
      path: '/auth/users',
      exact: true,
      key: 'users',
      name: '用户管理',
      component: Users
    }, {
      path: '/auth/roles',
      exact: true,
      key: 'roles',
      name: '角色管理',
      component: Roles
    }]
  }
]

export default menu