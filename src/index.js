import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_74 from './App_74';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <App_74 />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
