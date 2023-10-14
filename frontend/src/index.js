import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux';
import {Provider} from 'react-redux';

// setup code 
import * as process from 'process';
(window).global = window;
(window).process = process;
(window).Buffer = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);
