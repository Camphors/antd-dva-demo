/*
 * @Author: your name
 * @Date: 2020-10-19 15:25:49
 * @LastEditTime: 2020-10-24 15:57:34
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
    main: () => <Login></Login>
  },
  {
    path: '/home',
    key: 'dashboard',
    name: '数据概览',
    exact: true,
    main: () => <DashBoard></DashBoard>
  },
  {
    path: '/map',
    key: 'map',
    name: '数据地图',
    main: () => <Map></Map>
  },
  {
    path: '/overview',
    key: 'overview',
    name: '数据总览',
    main: () => <Overview></Overview>
  },
  {
    path: '/details',
    key: 'details',
    main: () => <Details></Details>
  },
  {
    path: '/auth',
    key: 'auth',
    name: '权限管理',
    redirect: '/auth/users',
    main: () => <Users></Users>,
    children: [{
      path: '/auth/users',
      key: 'users',
      name: '用户管理',
      main: () => <Users></Users>
    }, {
      path: '/auth/roles',
      key: 'roles',
      name: '角色管理',
      main: () => <Roles></Roles>
    }]
  }
]

export default menu