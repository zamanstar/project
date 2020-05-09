import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './learns/LifeCycleApp';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'


// window.Element = (
//   <div>
//     <h1>Hello Rocket</h1>
//     <p>it is {new Date().toDateString()}</p>
//   </div>
// )

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
