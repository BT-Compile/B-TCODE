import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Pages/App';
import About from './Pages/About';
import Links from './Pages/Links';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={App} />
      <Route path='/Home' Component={App} />
      <Route path='/About' Component={About} />
      <Route path='/Links' Component={Links} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);