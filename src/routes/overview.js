/*
 * @Author: your name
 * @Date: 2020-10-19 16:37:39
 * @LastEditTime: 2020-10-23 14:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\statistics.js
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import OverviewList from '../components/OverviewList'

const Overview = ({ dispatch, overview }) =>  {
  const tableProps = {
    overviewList: overview.list
  }
  return (
    <div>
      <OverviewList { ...tableProps }></OverviewList>
    </div>
  )
}

Overview.propTypes = {
  dispatch: PropTypes.func,
  overview: PropTypes.object.isRequired,
}

function mapStateToProps({overview}) {
  return { overview }
}

export default connect(mapStateToProps)(Overview)


