import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainNav from './MainNav';

it('renders without crashing', () => {
  const nav = document.createElement('nav');

  ReactDOM.render(<BrowserRouter><MainNav /></BrowserRouter>, nav);
  
  ReactDOM.unmountComponentAtNode(nav);
});