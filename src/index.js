import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './loops';
import ClassIncDec from './incdecclass';
import ReadInput from './Readinput';
import TableInput from './TableInput';
import DisplayData from './DisplayData';
import ComponentLifeCycle from './ComponentLifeCycle';
import UseEffectDemo from './UseEffectDemo';
import CallBackEvent from './CallBcakEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
  <CallBackEvent/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
