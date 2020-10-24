/*
 * @Author: your name
 * @Date: 2020-10-23 15:37:27
 * @LastEditTime: 2020-10-23 16:42:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\details.js
 */
import React, { Component } from 'react'
import { Table, Tabs, TabPane } from 'antd'
import list from '../mock/overview'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

export default class details extends Component {
  render() {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }

    const coulmns = [
      {
        title: 'Key',
        dataIndex: 'key'
      },
      {
        title: 'Key',
        dataIndex: 'value'
      }
    ]
    
    return (
      <div>
        <div><Link to="/overview"><LeftOutlined />返回</Link> <span>{this.props.tableName}</span></div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="概览" key="1">
            <Table columns = { coulmns }  dataSource = {list.details.items}></Table>
          </TabPane>
          <TabPane tab="血缘" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="关系" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="列详情" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="表数据" key="5">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
