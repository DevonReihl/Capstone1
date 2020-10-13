import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<Gallery />, section);
  
  ReactDOM.unmountComponentAtNode(section);
});