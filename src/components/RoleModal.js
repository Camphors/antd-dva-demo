import React from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'

const RoleModal = ({ visible, handleCancel, handleOk }) => {
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
      title="查看权限"
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
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

RoleModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleOk:PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

// export default Form.create()(RoleModal)
export default RoleModal