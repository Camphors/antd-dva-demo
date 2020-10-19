/*
 * @Author: your name
 * @Date: 2020-10-19 17:05:25
 * @LastEditTime: 2020-10-19 18:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\roles.js
 */
import React, { Component } from 'react'
import { Table, Button, Modal } from 'antd'

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
    render: (text) => <div><Button onClick={showDetails(text)}>查看</Button></div>
  },
]

const data = [
  {
    key: '1',
    tableName: 'dim_official_city_d_f',
    description: '行政城市',
    databaseName: 'interface_edw'
  },
  {
    key: '2',
    tableName: 'dwd_stamp_gift_d_f',
    description: '印花活动赠品',
    databaseName: 'interface_edw'
  },
  {
    key: '3',
    tableName: 'dwd_sms_task_d_f',
    description: '短信工单',
    databaseName: 'interface_edw'
  },
  {
    key: '4',
    tableName: 'dwd_stamp_account_d_f',
    description: '会员印花账户',
    databaseName: 'interface_edw'
  },
  {
    key: '5',
    tableName: 'dim_task_rule_d_f',
    description: '工单预设规则',
    databaseName: 'interface_edw'
  }
]

const visible = false

function showDetails(text) {
  console.log(text)
}

export default class roles extends Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data}></Table>
        <Modal
          title="查看权限"
          visible={visible}
        ></Modal>
      </div>
    )
  }
}
