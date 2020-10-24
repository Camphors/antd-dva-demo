/*
 * @Author: your name
 * @Date: 2020-10-23 10:39:49
 * @LastEditTime: 2020-10-23 17:13:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\OverviewList.js
 */
import React, { Component } from 'react'
import { Button, Table } from 'antd'
import { Redirect, StaticRouter } from "react-router"
import { useHistory, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { createHashHistory,createBrowserHistory } from 'history'

export default class OverviewList extends Component{
  render() {
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
        title: '拥有者',
        dataIndex: 'owner'
      },
      {
        title: '创建时间',
        dataIndex: 'createtime'
      },
      {
        title: '操作',
        dataIndex: 'opertation',
        render: (text, record) => (
          <div>
            <Link to={{pathname: `/details`, query: record }}><Button>详情</Button></Link>
          </div>
        )
      }
    ]
    // const _this = this
    // const onRow = (record) => {
    //   const history = createHashHistory()
    //   return {
    //     onClick: e => { console.log(11); <Link to="/users"/>},
    //     onMouseEnter: e => {   }
    //   }
    // }
    return (
      <Table columns={columns} dataSource={this.props.overviewList}></Table>
    )
  }
}

OverviewList.propTypes = {
  
}
