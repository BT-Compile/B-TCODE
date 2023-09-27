import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Pages/App';
import About from './Pages/About';
import Contact from './Pages/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={App} />
      <Route path='/Code' Component={App} />
      <Route path='/About' Component={About} />
      <Route path='/Contact' Component={Contact} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);