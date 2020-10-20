/*
 * @Author: your name
 * @Date: 2020-10-20 18:04:10
 * @LastEditTime: 2020-10-20 18:26:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\UserList.js
 */
import { Table, Button, Pagination } from 'antd'
import PropTypes from 'prop-types'

const UsersList = ({ changePage, users, showEdit, handleDelete }) => {
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
      render: (text, record) => (
        <div>
          <Button onClick={(key) => showEdit(key,record)}>编辑</Button>&nbsp;&nbsp;
          <Button onClick={(key) => handleDelete(key,record)}>删除</Button>
        </div>
      )
    },
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

  return(
    <div>
      <Table columns={columns} dataSource={users} pagination={ paginationProps }></Table>
    </div>
  )
}

UsersList.protoTypes = {
  changePage: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  showEdit: PropTypes.func.isRequired
}

export default UsersList