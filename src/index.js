import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const render = () => {
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)};
render();

store.subscribe(render)

reportWebVitals();
