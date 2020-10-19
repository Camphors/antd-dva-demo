/*
 * @Author: your name
 * @Date: 2020-10-19 15:25:49
 * @LastEditTime: 2020-10-19 17:17:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\utils\menu.js
 */

 import DashBoard from '../routes/home'
 import Map from '../routes/map'
 import Statistics from '../routes/statistics'
 import Users from '../routes/users'
 import Roles from '../routes/roles'

 
const menu = [
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
    path: '/statistics',
    key: 'statistics',
    name: '数据总览',
    main: () => <Statistics></Statistics>
  },
  {
    path: '/auth',
    key: 'auth',
    name: '权限管理',
    main: () => <div>权限管理</div>
  },
  {
    path: '/users',
    key: 'users',
    name: '用户管理',
    main: () => <Users></Users>
  },
  {
    path: '/roles',
    key: 'roles',
    name: '角色管理',
    main: () => <Roles></Roles>
  }
]

export default menu