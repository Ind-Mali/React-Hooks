import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./components/Counter"
import reportWebVitals from './reportWebVitals';
import InputExample from './components/InputExample';
import App2 from './App2';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <InputExample /> */}
    {/* <button onClick={()=>{}>Toggle</button> */}
    {/* <App/> */}
    <App2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
