import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './ListItems';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<ListItems />, section);
  
  ReactDOM.unmountComponentAtNode(section);
});