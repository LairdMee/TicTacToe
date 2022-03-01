import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

// const user = {
//   name: 'David',
//   email: 'david@mail.com'  
// }

// const element = <h1>Hello, {user.name}</h1>; // jsx expression (tag syntax more powerful than html)
// const element2 = document.createElement('h1');
// element2.innerHTML = `Hey, ${user.name}`;
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
