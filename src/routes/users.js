/*
 * @Author: your name
 * @Date: 2020-10-19 17:05:20
 * @LastEditTime: 2020-10-19 17:57:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\users.js
 */
import React, { Component } from 'react'
import { Table, Button, Pagination } from 'antd'


const columns = [
  { 
    title: '用户名',
    dataIndex: 'username'
  },
  { 
    title: '角色',
    dataIndex: 'rolename'
  },
  { 
    title: '邮箱',
    dataIndex: 'email'
  },
  { 
    title: '手机号',
    dataIndex: 'telephone'
  },
  { 
    title: '操作',
    dataIndex: 'operation',
    render: () => <div><Button>编辑</Button>&nbsp;&nbsp;<Button>删除</Button></div>
  },
]

const data = [
  {
    key: '1',
    username: 'admin',
    rolename: '管理员',
    email: '850206080@qq.com',
    telephone: '13308108766'
  }, 
  {
    key: '2',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }, 
  {
    key: '3',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }, 
  {
    key: '4',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }, 
  {
    key: '5',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }, 
  {
    key: '6',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }, 
  {
    key: '7',
    username: 'sensorsdata',
    rolename: '游客',
    email: 'll@sensorsdata.cn',
    telephone: '0293-132213138'
  }
]

const page = {
  total: 7,
  pageNum: 1,
  pageSize: 5,
}

const paginationProps = {
  showSizeChanger: true,
  showQuickJumper: false,
  showTotal: () => `共${page.total}条`,
  pageSizeOptions: [10, 20, 50, 200],
  pageSize: page.pageSize,
  current: page.pageNum,
  total: page.total,
  // onShowSizeChange: (current, pageSize) => changePageSize(pageSize, current),
  onChange: (current) => changePage(current)
}

function changePageSize() {
  console.log(1)
}

function changePage() {
  console.log(2)
}

export default class Users extends Component {
  
  render() {
    return(
      <div>
        <Table columns={columns} dataSource={data} pagination={ paginationProps }></Table>
        {/* <Pagination onChange={onChange} current={1}></Pagination> */}
      </div>
    )
  }
}