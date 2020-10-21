/*
 * @Author: your name
 * @Date: 2020-10-21 15:14:52
 * @LastEditTime: 2020-10-21 18:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\components\charts.js
 */
import React, { Component } from 'react'
import { Chart, Util } from '@antv/g2';
import * as G2 from '@antv/g2'
// import DataSet from '@antv/data-set'

var data = [{
  type: '一线城市',
  value: 0.19
}, {
  type: '二线城市',
  value: 0.21
}, {
  type: '三线城市',
  value: 0.27
}, {
  type: '四线及以下',
  value: 0.33
}]

export default class Pie extends Component {
  componentDidMount() {
    const chart = new Chart({
      container: this.props.idName,
      // autoFit: true,
      height: 500,
      width: 550
    });
    chart.data(data);
    
    chart.coordinate('theta', {
      radius: 0.75
    });
    chart.tooltip({
      showMarkers: false
    });
    
    const interval = chart
      .interval()
      .adjust('stack')
      .position('value')
      .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
      .style({ opacity: 0.4 })
      .state({
        active: {
          style: (element) => {
            const shape = element.shape;
            return {
              matrix: Util.zoom(shape, 1.1),
            }
          }
        }
      })
      .label('type', (val) => {
        const opacity = val === '四线及以下' ? 1 : 0.5;
        return {
          offset: -30,
          style: {
            opacity,
            fill: 'white',
            fontSize: 12,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
          content: (obj) => {
            return obj.type + '\n' + obj.value + '%';
          },
        };
      });
    
    chart.interaction('element-single-selected');
    
    chart.render();
  }
  render() {
    return (
      <div>
        <div id={this.props.idName}></div>
      </div>
    )
  }
}
