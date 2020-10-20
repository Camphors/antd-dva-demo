/*
 * @Author: your name
 * @Date: 2020-10-20 18:04:18
 * @LastEditTime: 2020-10-20 18:06:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\UserModal.js
 */
import React from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'

const UserModal = ({ visible, handleCancel, handleOk }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title="编辑用户"
      visible={visible}
      onOk={handleOk()}
      onCancel={handleCancel()}
    >
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="角色"
        name="rolename"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="手机号"
        name="telephone"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Modal>
  )
}

UserModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleOk:PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

// export default Form.create()(RoleModal)
export default UserModal