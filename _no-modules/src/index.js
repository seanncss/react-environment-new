import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {return (<h1>Hello, build environment template!</h1>)}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)