import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global CSS
import App from './App'; // Import main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This refers to the <div id="root"> in index.html
);
