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
import Home from './ReactRouter/Home';
import ComponentLifeCycle from './ComponentLifeCycle';
import UseEffectDemo from './UseEffectDemo';
import CallBackEvent from './CallBcakEvent';
import Task from './Edit';
import Edit from './Edit';
import About from './Edit';
import Login from './ReactRouter/Login';
import Loginpage from './ReactRouter/Loginpage';
import ReactRouter from './ReactRouter/ReactRouter';
import ContextApi from './ContextApi/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
  <ContextApi/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
