import * as React from 'react';
import { render } from 'react-dom';
import stores from '@src/stores';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import "antd-mobile/dist/antd-mobile.less"
import './customize.less'

render (
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
