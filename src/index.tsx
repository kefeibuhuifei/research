import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConfigProvider from 'antd/es/config-provider'
import zh_CN from 'antd/es/locale-provider/zh_CN'
import { HashRouter,  Route, Switch} from 'react-router-dom';
import ErrorPage from './pages/Error'
import IndexPage from './pages/Index'
import ImagePage from './pages/Image'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/img" component={ImagePage} />
      <Route component={ErrorPage} />
    </Switch>
  </HashRouter>
  </ConfigProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
