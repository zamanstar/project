import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

// window.Element = (
//   <div>
//     <h1>Hello Rocket</h1>
//     <p>it is {new Date().toDateString()}</p>
//   </div>
// )

let tick = () =>{
  let element = (
    <div>
    <h1>Hello Rocket</h1>
    <p>it is {new Date().toTimeString()}</p>
  </div>
  )
  return element
}

setInterval(() => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
