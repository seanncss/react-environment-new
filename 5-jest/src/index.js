import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)