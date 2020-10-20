/*
 * @Author: your name
 * @Date: 2020-10-19 16:25:54
 * @LastEditTime: 2020-10-20 17:34:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\home.js
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styles from './home.css'

export default class home extends Component {
  render() {
    return (
      <div>
        <Row justify="space-between">
          <Col span={7}>
            <div className={styles.navTitle}>数据库总数</div>
            <div className={styles.navNum}></div>
          </Col>
          <Col span={7}>
            <div className={styles.navTitle}>数据表总数</div>
            <div className={styles.navNum}></div>
          </Col>
          <Col span={7}>
            <div className={styles.navTitle}>磁盘占用总数</div>
            <div className={styles.navNum}></div>
          </Col>
        </Row>
      </div>
    )
  }
}
