import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from './components/context'
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
