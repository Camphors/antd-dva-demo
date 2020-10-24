/*
 * @Author: your name
 * @Date: 2020-10-21 15:14:52
 * @LastEditTime: 2020-10-22 10:33:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\charts.js
 */
import React, { Component } from 'react'
import { Chart } from '@antv/g2';
import * as G2 from '@antv/g2'
// import DataSet from '@antv/data-set'

const data = [
  { type: '汽车', value: 34 },
  { type: '建材家居', value: 85 },
  { type: '住宿旅游', value: 103 },
  { type: '交通运输与仓储邮政', value: 142 },
  { type: '建筑房地产', value: 251 },
  { type: '教育', value: 367 },
  { type: 'IT 通讯电子', value: 491 },
  { type: '社会公共管理', value: 672 },
  { type: '医疗卫生', value: 868 },
  { type: '金融保险', value: 1234 },
];

export default class Bar extends Component {
  componentDidMount() {
    const chart = new Chart({
      container: this.props.idName,
      // autoFit: true,
      height: 500,
      width: 550
    });
    chart.data(data);
    chart.scale({
      value: {
        max: 1400,
        min: 0,
        alias: '销量（百万）',
      },
    });
    chart.axis('type', {
      title: null,
      tickLine: null,
      line: null,
    });
    
    chart.axis('value', {
      label: null,
      title: {
        offset: 30,
        style: {
          fontSize: 12,
          fontWeight: 300,
        },
      },
    });
    chart.legend(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('type*value')
      .size(26)
      .label('value', {
        style: {
          fill: '#8d8d8d',
        },
        offset: 10,
      });
    chart.interaction('element-active');
    chart.render();
  }
  render() {
    return (
      <div>
        <div id={this.props.idName}  style={{padding: '20px'}}></div>
      </div>
    )
  }
}
