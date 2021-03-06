/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-27 16:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\IndexPage.js
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import styles from './IndexPage.css';
import { Layout, Menu, Dropdown } from 'antd';
import $$ from 'cmn-utils';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import menu from '../utils/menu'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  BankOutlined,
  UserOutlined,
  VideoCameraOutlined,
  GlobalOutlined,
  FileTextOutlined,
  LockOutlined,
  Icon
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { createBrowserHistory } from "history"

const history = createBrowserHistory()
const { Header, Sider, Content } = Layout;

// 获取动态菜单
const getMenus = (list ) => {
  return list.map((item => {
    if (item.name) {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.name}>
            {getMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      )
    }
  }))
}

const menuItem = getMenus(menu)

// 动态生成页面路由
const generateRoute = (data) => {
  if (data.children) {
    return (
      <Switch key= {data.path}>
        {
          data.children.map(item => {
            return generateRoute(item)
          })
        }
      </Switch>
    )
  }
  return <Route key={data.key} path={data.path} component={data.component} exact={data.exact}></Route>
}


class IndexPage extends Component {
  componentDidMount() {
    const user = $$.getStore('user')
    if(!user) {
      this.props.dispatch(routerRedux.replace('/login'))
    }
  }
  
  render () {
    function logout() {
      $$.removeStore('user')
      history.push('/login')
      history.go()
    }
    
    const dropdownItem = (
      <Menu>
        <Menu.Item key="0">
          <span onClick={logout}>退出登录</span>
        </Menu.Item>
      </Menu>
    )
    
    
    return (
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible>
        {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}> */}
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuItem}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: '20px',color: "#000",background: '#ccc' }}>
            <MenuUnfoldOutlined></MenuUnfoldOutlined>
            <Dropdown  className={styles['current-login']} overlay={dropdownItem} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                admin 
                <DownOutlined />
              </a>
            </Dropdown>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: 20,
              padding: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              {
                menu.map(item => {
                  return generateRoute(item)
                })
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// const IndexPage = ({dispatch, login}) => {
  
  // function logout() {
  //   console.log(1)
  //   dispatch({
  //     type: 'login/logout',
  //   })
  // }

//   const dropdownItem = (
//     <Menu>
//       <Menu.Item key="0">
//         {/* <a><Route path="/login">退出登录</Route></a> */}
//         <a onClick={logout}>退出登录</a>
//       </Menu.Item>
//     </Menu>
//   )

//   return (
//     <Layout style={{height:'100%'}}>
//       <Sider trigger={null} collapsible>
//       {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}> */}
//         <div className="logo" />
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//           {menuItem}
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ paddingLeft: '20px',color: "#000",background: '#ccc' }}>
//           <MenuUnfoldOutlined></MenuUnfoldOutlined>
//           <Dropdown  className={styles['current-login']} overlay={dropdownItem} trigger={['click']}>
//             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//               admin 
//               <DownOutlined />
//             </a>
//           </Dropdown>
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: 20,
//             padding: 0,
//             minHeight: 280,
//           }}
//         >
//           <Switch>
//             {
//               menu.map(item => {
//                 return generateRoute(item)
//               })
//             }
//             {/* {menu.map((route, index) => (
//               <Route 
//                 key={route.key}
//                 path={route.path}
//                 exact={route.exact}
//                 // component={route.main}
//               ></Route>
//             ))} */}
//           </Switch>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

export default connect(({login}) => {
  login
})(IndexPage);
