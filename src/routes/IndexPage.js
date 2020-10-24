/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-24 16:24:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\IndexPage.js
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Dropdown } from 'antd';
import createHistory from 'history/createHashHistory'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter
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
  LockOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;
// 页面刷新后不会报错
const history = createHistory()

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
  return <Route key={data.key} path={data.path} component={data.main} exact={data.exact}></Route>
}

const dropdownItem = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/login">退出登录</Link>
    </Menu.Item>
  </Menu>
)

function IndexPage() {
  return (
    <Layout style={{height:'100%'}}>
      <Sider trigger={null} collapsible>
      {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}> */}
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {menuItem}
          {/* <Menu.Item key="1" icon={<BankOutlined />}>
            <Link to='/home'>
            数据概览
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<GlobalOutlined />}>
            <Link to='/map'>
              数据地图
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            <Link to="/overview">数据总览</Link>
          </Menu.Item>
          <SubMenu key="4" icon={<LockOutlined />} title="权限管理">
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to="/users">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              <Link to="/roles">角色管理</Link>
            </Menu.Item>
          </SubMenu> */}
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
            {/* {menu.map((route, index) => (
              <Route 
                key={route.key}
                path={route.path}
                exact={route.exact}
                // component={route.main}
              ></Route>
            ))} */}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
