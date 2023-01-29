import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './modules';


const store = createStore(
  rootReducer, 
  composeWithDevTools(),
);

console.log(store.getState());
store.dispatch({ type: "auth/SAMPLE_ACTION"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
