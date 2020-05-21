import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import StoreComponent from './Store/';
import { PersistGate } from 'redux-persist/integration/react'
import  { BreakpointProvider } from 'react-socks';

ReactDOM.render(
  <React.StrictMode>
  <BreakpointProvider>
    <Provider store={StoreComponent.store}>
    <PersistGate loading={null} persistor={StoreComponent.persistor}>
      <App />
    </PersistGate>
    </Provider>
    </BreakpointProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
