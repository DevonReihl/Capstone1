import React from 'react';
import ReactDOM from 'react-dom';
import EditMember from './EditMember';

it('renders without crashing', () => {
 
  const form = document.createElement('form');
  
  ReactDOM.render(<EditMember />, form);
 
  ReactDOM.unmountComponentAtNode(form);
});