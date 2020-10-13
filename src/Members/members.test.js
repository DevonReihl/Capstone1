import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Members from './Members';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<BrowserRouter><Members /></BrowserRouter>, section);
  
  ReactDOM.unmountComponentAtNode(section);
});
