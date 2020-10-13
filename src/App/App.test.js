import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, section);
  
  ReactDOM.unmountComponentAtNode(section);
});
