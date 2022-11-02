import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './router';
import Layout from './components/layout'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

// import './styles/global.scss';
import './styles/normalize.scss';

import { HashRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
// import { store } from './redux';
// import { Provider } from 'react-redux';

import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider locale={zhCN}>
        {/* <Provider store={store}> */}
          <HashRouter>
            {/* <App /> */}
            <Layout />
          </HashRouter>
        {/* </Provider> */}
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>
);




