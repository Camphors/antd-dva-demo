/*
 * @Author: your name
 * @Date: 2020-10-23 10:50:38
 * @LastEditTime: 2020-10-23 16:34:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\mock\overview.js
 */
const data = {
  dataList: [{
    key: '1',
    tableName: 'dim_official_city_d_f',
    description: '行政城市',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }, {
    key: '2',
    tableName: 'dwd_stamp_gift_d_f',
    description: '印花活动赠品',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }, {
    key: '3',
    tableName: 'dwd_sms_task_d_f',
    description: '短信工单',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }, {
    key: '4',
    tableName: 'dwd_stamp_account_d_f',
    description: '会员印花账户',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }, {
    key: '5',
    tableName: 'dim_task_rule_d_f',
    description: '工单预设规则',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }, {
    key: '6',
    tableName: 'dim_pub_list_d_f',
    description: '产品列表',
    owner: 'sa_cluster',
    createtime: '2020-08-26 06:34:29'
  }],
  details: {
    id: 1,
    items: [{
      key: '别名(aliases)',
      value: ''
    }, {
      key: '注解(comment)',
      value: '2020-09-10 17:56:47'
    }, {
      key: '创建时间(createTime)',
      value: ''
    }, {
      key: '最后访问时间(lastAccessTime)',
      value: '2020-09-10 17:56:46'
    }, {
      key: '参数(parameters)',
      value: '{"transient_lastDdlTime":"1599731806","comment":"dim_official_city_d_f 行政城市"}'
    }, {
      key: '合格名字(qualifiedName)',
      value: 'interface_edw.dim_official_city_d_f@primary'
    }]
  }
}

export default data