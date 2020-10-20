/*
 * @Author: your name
 * @Date: 2020-10-19 17:05:25
 * @LastEditTime: 2020-10-20 18:40:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\roles.js
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import RoleList from '../components/RoleList'
import RoleModal from '../components/RoleModal'
import PropTypes from 'prop-types'

const Roles = ({ dispatch, roles, visible }) => {
  const modalProps = {
    visible,
    handleOk (data) {
    },
    handleCancel (data) {
      
    }
  }

  const listProps = {
    roles,
    handleDelete (key, data) {
      console.log(data)
      dispatch({
        type: 'roles/delete',
        payload: data.key
      })
    },
    showEdit (key, data) {
      dispatch({
        type: 'roles/edit',
        payload: data
      })
    }
  }

  // function handleDelete(key, record) {
  //   console.log(123)
  //   dispatch({
  //     type: 'roles/delete',
  //     payload: record.key
  //   })
  // }

  // function showEdit(key, record) {
  //   console.log(record)
  //   dispatch({
  //     type: 'roles/edit',
  //     payload: record
  //   })
  // }

  return (
    <div>
      <RoleList {...listProps}></RoleList>
      {/* <RoleList handleDelete={handleDelete}  showEdit={showEdit} roles={roles}></RoleList> */}
      <RoleModal {...modalProps}></RoleModal>
    </div>
  )
}

Roles.propTypes = {
  dispatch: PropTypes.func,
  roles: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  // handleCancel: PropTypes.func,
  // showEdit: PropTypes.func,
  // handleOk: PropTypes.func,
  // handleDelete: PropTypes.func
}

function mapStateToProps ({ roles, visible }) {
  return { roles, visible }
}
 
// export default connect(({ roles }) => ({
//   roles
// }))(Roles);

export default connect(mapStateToProps)(Roles)
