/*
 * @Author: your name
 * @Date: 2020-10-24 14:10:54
 * @LastEditTime: 2020-10-24 18:14:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\login.js
 */
import React, { Component } from 'react'
import { Form, Button, Input, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './login.css'

const login = ({dispatch, login}) => {
  const onFinish = ()  =>{
    
  }

  return (
    <div className={styles['login']}>
      <Form name='normal_login' className={styles['login-form']} initialValues={{ remember: true }} onFinish={onFinish}>
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
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default login