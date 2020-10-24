/*
 * @Author: your name
 * @Date: 2020-10-23 15:27:14
 * @LastEditTime: 2020-10-23 15:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\details.js
 */
import { Tabs } from 'antd'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Detaisl = ({dispatch, details})=> {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
  )
}