// React imports

import React from 'react';
import ReactDOM from 'react-dom';

// Own imports
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();