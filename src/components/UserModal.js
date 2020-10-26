/*
 * @Author: your name
 * @Date: 2020-10-20 18:04:18
 * @LastEditTime: 2020-10-26 14:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\UserModal.js
 */
import React from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'

const UserModal = ({ visible, formData, handleCancel, handleOk }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  // const { getFieldDecorator } = form

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm()
  return (
    <Modal
      title="编辑用户"
      visible={visible}
      okText="确认"
      cancelText="取消"
      onOk={() => {
        form.validateFields().then(values => {
          form.resetFields()
          handleOk(values)
        }).catch(err => {
          console.log('Validate Error Info:', err)
        })
      }}
      onCancel={() => handleCancel()}
    >
      <Form
      {...layout}
      name="basic"
      form={form}
      initialValues={{ ...formData }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="key"
        name="key"
        hidden
      >
      </Form.Item>
      <Form.Item
        label="用户名"
        name="username"
      >
        <Input disabled/>
      </Form.Item>

      <Form.Item
        label="角色"
        name="rolename"
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, message: '请输入邮箱!' }]}
      >
        <Input value={formData.email}/>
      </Form.Item>

      <Form.Item
        label="手机号"
        name="telephone"
        rules={[{ required: true, message: '请输入手机号!' }]}
      >
        <Input value={formData.telephone}/>
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