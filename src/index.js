import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App'; 

const HtmlHead = () => (
  <>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Twitter</title>
    <link href="http://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />
  </>
);

const Root = () => (
  <div className="bg-black text-white">
    <App />
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <HtmlHead />
    <Root />
  </React.StrictMode>,
  rootElement
);
