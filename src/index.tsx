import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.less';
ReactDOM.render(
  <App name="test"/>,
  document.getElementById('app') as HTMLElement
);
if (module['hot']) {
  module['hot'].accept();
}