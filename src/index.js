import React from 'react';
import ReactDOM from 'react-dom';
import ImportComponent from './importComponent';

console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    <ImportComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);
