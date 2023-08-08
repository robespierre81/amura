import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById("theflowdashboard");
ReactDOM.render(
  <React.StrictMode>
      <div style={{height: '100%', width: '100%'}} >
    <App />
    </div>
  </React.StrictMode>,
  rootElement
);
