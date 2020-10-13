import React from 'react';
import ReactDOM from 'react-dom';
import AddMember from './AddMember';

it('renders without crashing', () => {
 
  const form = document.createElement('form');
  
  ReactDOM.render(<AddMember />, form);
 
  ReactDOM.unmountComponentAtNode(form);
});