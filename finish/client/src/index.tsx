import React from 'react';
import ReactDOM from 'react-dom';
import webFontLoader from 'webfontloader';

import './assets/styles/main.css';
import App from './App';

webFontLoader.load({
  google: {
    families: ["Raleway:400,700:latin"]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
