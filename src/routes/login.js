/*
 * @Author: your name
 * @Date: 2020-10-24 14:10:54
 * @LastEditTime: 2020-10-27 16:17:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\login.js
 */
import React, { Component } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Button, Input, Checkbox } from 'antd'
import styles from './login.css'
import { connect } from 'dva'

const Login = ({dispatch, login}) => {
  const { loginData } = login
  const onFinish = values => {
    dispatch({
      type: 'login/login',
      payload: loginData
    })
  };

  const onFinishFailed = ()  =>{
    console.log(11)
  }

  return (
    <div className={styles['login']}>
      <Form 
        name='basic' 
        className={styles['login-form']} 
        initialValues={{ ...loginData }} 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item name="username" rules={[{required: true, message: '请输入用户名'}]}>
          <Input prefix={<UserOutlined/>} placeholder="用户名" style={{height: '40px'}}></Input>
        </Form.Item>
        <Form.Item name="password"  rules={[{required: true, message: '请输入密码'}]}>
          <Input prefix={<LockOutlined/>} placeholder="密码" type="password" style={{height: '40px'}}></Input>
        </Form.Item>
        {/* <Form.item name="remeber" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']} onClick={onFinish}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default connect(({login}) => ({
  login
}))(Login)