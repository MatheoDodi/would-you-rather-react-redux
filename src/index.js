import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Middleware from './middleware';
import * as serviceWorker from './serviceWorker';

const store = createStore(() => null, Middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
