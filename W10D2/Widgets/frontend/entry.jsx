import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Widgets from './widgets.jsx';
document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("react-root");
  ReactDOM.render(<Widgets />, root);
});