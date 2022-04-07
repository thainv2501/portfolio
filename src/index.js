import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const starNumber = 450;
const stars = document.getElementsByClassName('stars')[0];
for (let index = 0; index < starNumber; index++) {
  let spanNode = document.createElement('span')
  let rng1 = Math.floor(Math.random() * 255)
  let rng2 = Math.floor(Math.random() * 255)
  let rng3 = Math.floor(Math.random() * 255)
  spanNode.style.background = `rgb(${rng1},${rng2},${rng3})`
  let delay = Math.random() * 5
  spanNode.style.animationDelay = delay + 's'
  stars.appendChild(spanNode).classList.add('star')

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();