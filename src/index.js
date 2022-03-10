import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './assets/fonts/moonlight.ttf'
import './assets/fonts/avenir_ff/AvenirLTStd-Black.otf'
import './assets/fonts/avenir_ff/AvenirLTStd-Book.otf'
import './assets/fonts/avenir_ff/AvenirLTStd-Roman.otf'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
