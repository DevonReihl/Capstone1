import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ListItems from './ListItems';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<BrowserRouter><ListItems /></BrowserRouter>, section);
  
  ReactDOM.unmountComponentAtNode(section);
});