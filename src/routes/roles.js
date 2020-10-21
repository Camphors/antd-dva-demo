/*
 * @Author: your name
 * @Date: 2020-10-19 17:05:25
 * @LastEditTime: 2020-10-21 10:24:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\roles.js
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import RoleList from '../components/RoleList'
import RoleModal from '../components/RoleModal'
import PropTypes from 'prop-types'

const Roles = ({ dispatch, roles }) => {
  const modalProps = {
    visible: roles.visible,
    handleOk (data) {
    },
    handleCancel (data) {
      
    }
  }

  const listProps = {
    roles: roles.roles,
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

  return (
    <div>
      <RoleList {...listProps}></RoleList>
      <RoleModal {...modalProps}></RoleModal>
    </div>
  )
}

Roles.propTypes = {
  dispatch: PropTypes.func,
  roles: PropTypes.object.isRequired,
}

function mapStateToProps ({ roles }) {
  return { roles }
}
 
// export default connect(({ roles }) => ({
//   roles
// }))(Roles);

export default connect(mapStateToProps)(Roles)
