import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom';

import store from './store/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <Provider store={store}>
  <App />
  </Provider>  
 
  </BrowserRouter>
);

