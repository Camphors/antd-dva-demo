/*
 * @Author: your name
 * @Date: 2020-10-19 14:14:13
 * @LastEditTime: 2020-10-24 18:11:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-dva-demo\src\index.js
 */
import dva from 'dva';
import 'antd/dist/antd.css'
import './index.css';
import { browserHistory } from 'dva/router'
import createLoading from 'dva-loading'

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory,
  onError (error) {
    console.log('Error info:', error)  
  }
})

// 2. Plugins
// app.use(createLoading({effects: true}));

// 3. Model
// app.model(require('./models/app').default);
app.model(require('./models/roles').default)
app.model(require('./models/users').default)
app.model(require('./models/overview').default)
app.model(require('./models/login').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
