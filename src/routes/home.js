/*
 * @Author: your name
 * @Date: 2020-10-19 16:25:54
 * @LastEditTime: 2020-10-23 16:21:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\home.js
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import classnames from 'classnames'
import styles from './home.css'
import Pie from '../components/Charts'
import Bar from '../components/Bar'

export default class home extends Component {
  render() {
    const BarOne = 'barOne'
    const BarTwo = 'barTwo'
    const PieOne = 'pieOne'
    const PieTwo = 'pieTwo'

    return (
      <div>
        <Row className={styles['ant-row']} justify="space-between">
          <Col span={7} className={classnames(styles['ant-col'], styles['ant-col-7'])}>
            <div className={styles['nav-title']}>数据库总数</div>
            <div className={styles['nav-num']} style={{color: 'rgb(69, 160, 223)'}}>6个</div>
          </Col>
          <Col span={7} className={classnames(styles['ant-col'], styles['ant-col-7'])}>
            <div className={styles['nav-title']}>数据表总数</div>
            <div className={styles['nav-num']} style={{color: 'rgb(67, 176, 157)'}}>243张</div>
          </Col>
          <Col span={7} className={classnames(styles['ant-col'], styles['ant-col-7'])}>
            <div className={styles['nav-title']}>磁盘占用总数</div>
            <div className={styles['nav-num']} style={{color: 'rgb(243, 113, 97)'}}>800GB</div>
          </Col>
        </Row>

        <Row className={styles['ant-row']} justify="space-between">
          <Col span={11} className={classnames(styles['ant-col'], styles['ant-col-11'])}>
            <div className={styles['chart-title']}>数据库表占比</div>
            <Pie idName={PieOne}></Pie>
          </Col>
          <Col span={11} className={classnames(styles['ant-col'], styles['ant-col-11'])}>
            <div className={styles['chart-title']}>数据库磁盘占比(GB)</div>
            <Pie idName={PieTwo}></Pie>
          </Col>
        </Row>

        <Row className={styles['ant-row']} justify="space-between">
          <Col span={11} className={classnames(styles['ant-col'], styles['ant-col-11'], styles['chart-nav'])}>
            <div className={styles['chart-title']}>表数据量 Top 5</div>
            <Bar idName={BarOne}></Bar>
          </Col>
          <Col span={11} className={classnames(styles['ant-col'], styles['ant-col-11'], styles['chart-nav'])}>
            <div className={styles['chart-title']}>表占用空间(GB) Top 5</div>
            <Bar idName={BarTwo}></Bar>
          </Col>
        </Row>
      </div>
    )
  }
}
