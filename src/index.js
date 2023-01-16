import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store'
import { BrowserRouter } from 'react-router-dom';

// redux persist
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persiststore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  
);

