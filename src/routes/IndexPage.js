/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-20 17:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\IndexPage.js
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home'
import Map from './map'
import menu from '../utils/menu'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LockOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;

function IndexPage() {
  return (
    <Router>
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible>
        {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}> */}
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/home'>
              数据概览
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/map'>
                数据地图
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/statistics">数据总览</Link>
            </Menu.Item>
            <SubMenu key="4" icon={<LockOutlined />} title="权限管理">
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/users">用户管理</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link to="/roles">角色管理</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(MenuUnfoldOutlined)}
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
              {menu.map((route, index) => (
                <Route 
                  key={route.key}
                  path={route.path}
                  exact={route.exact}
                  children={route.main}
                ></Route>
              ))}
            </Switch>
            {/* Content1 */}
          </Content>
        </Layout>
      </Layout>
    </Router>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
