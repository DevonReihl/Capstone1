import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MemberInfo from './MemberInfo';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<BrowserRouter><MemberInfo /></BrowserRouter>, section);
  
  ReactDOM.unmountComponentAtNode(section);
});