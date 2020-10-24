/*
 * @Author: your name
 * @Date: 2020-10-19 16:32:24
 * @LastEditTime: 2020-10-22 11:57:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\routes\map.js
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styles from './map.css'
import classnames from 'classnames'
import { FundProjectionScreenOutlined } from '@ant-design/icons';
export default class map extends Component {
  render() {
    return (
      <div>
        <Row className={styles['ant-row']} justify="left"> 
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>积分主题域</div>
          </Col>
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>营销主题域</div>
            <div>
              <ul className={styles['items']}>
                <li>dwd_stamp_gift_d_f</li>
                <li>dwd_stamp_account_d_f</li>
                <li>dwd_stamp_buy_d_f</li>
              </ul>
            </div>
          </Col>
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>电商主题域</div>
          </Col>
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>售后主题域</div>
          </Col>
        </Row>
        <Row className={styles['ant-row']} justify="left">
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>消费者主题域</div>
            <div>
              <ul className={styles['items']}>
                <li>dwd_stamp_gift_d_f</li>
                <li>dwd_stamp_account_d_f</li>
                <li>dwd_stamp_buy_d_f</li>
              </ul>
            </div>
          </Col>
          <Col span={6} className={classnames(styles['ant-col'])}>
            <div className={styles['header']}><FundProjectionScreenOutlined style={{paddingRight: '5px'}}/>DMP主题域</div>
          </Col>
        </Row>
      </div>
    )
  }
}
