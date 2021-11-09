import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { store } from './app/stores/app-middleware';

import NotificationProvider from "./app/notifications/NotificationProvider";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
