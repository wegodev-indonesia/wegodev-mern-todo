import React from 'react';
import ReactDOM from 'react-dom';
import webFontLoader from 'webfontloader';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import './assets/styles/main.css';
import App from './App';

const queryCache = new QueryCache()

webFontLoader.load({
  google: {
    families: ['Raleway:400,700:latin', 'Montserrat:700:latin']
  }
});

ReactDOM.render(
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App />
    </ReactQueryCacheProvider>
    {/* <ReactQueryDevtools initialIsOpen /> */}
  </>,
  document.getElementById('root')
);
