/*
 * @Author: your name
 * @Date: 2020-10-19 17:05:20
 * @LastEditTime: 2020-10-21 14:50:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\users.js
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import { Table, Button, Pagination } from 'antd'
import PropTypes from 'prop-types'
import UsersList from '../components/UserList'
import UserModal from '../components/UserModal'

function changePageSize() {
  console.log(1)
}

function changePage() {
  console.log(2)
}

const Users = ({ dispatch, users }) => {
  const userProps = {
    users: users.users,
    changePage() {
      
    },
    handleDelete(key, data) {
      dispatch({
        type: 'users/delete',
        payload: data.key
      })
    },
    showEdit(key, data) {
      dispatch({
        type: 'users/showModal',
        payload: data
      })
    }
  }

  const modalProps = {
    visible: users.visible,
    formData: users.formData,
    handleOk(data) {
      console.log(data)
      dispatch({
        type: 'users/submitEdit',
        payload: data
      })
    },
    handleCancel() {
      dispatch({
        type: 'users/hideModal',
        payload: null
      })
    }
  }
  return(
    <div>
      <UsersList {...userProps}></UsersList>
      <UserModal { ...modalProps }></UserModal>
      {/* <Table columns={columns} dataSource={data} pagination={ paginationProps }></Table> */}
      {/* <Pagination onChange={onChange} current={1}></Pagination> */}
    </div>
  )
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

function mapStateToProps ({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Users)
 