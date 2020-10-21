/*
 * @Author: your name
 * @Date: 2020-10-20 10:22:57
 * @LastEditTime: 2020-10-21 10:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\RoleList.js
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Modal } from 'antd'


const RoleList = ({ handleDelete, showEdit, roles }) => {
  const columns = [
    {
      title: '表名',
      dataIndex: 'tableName'
    },
    {
      title: '描述',
      dataIndex: 'description'
    },
    {
      title: '库名',
      dataIndex: 'databaseName'
    },
    {
      title: '权限',
      dataIndex: 'permission',
      render: (text, record) => (
        <div>
          <Button onClick={(key) => showEdit(key,record)}>编辑</Button>&nbsp;&nbsp;
          <Button onClick={(key) => handleDelete(key,record)}>删除</Button>
        </div>
      )
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={roles}></Table>
    </div>
  )
}

RoleList.protoTypes = {
  handleDelete: PropTypes.func.isRequired,
  showEdit: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired
}

export default RoleList