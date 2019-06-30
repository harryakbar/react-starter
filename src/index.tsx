import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './app';
import './index.css';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
