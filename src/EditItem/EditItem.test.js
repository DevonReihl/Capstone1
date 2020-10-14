import React from 'react';
import ReactDOM from 'react-dom';
import EditItem from './EditItem';

it('renders without crashing', () => {
 
  const form = document.createElement('form');
  
  ReactDOM.render(<EditItem match={{params:{itemId:1}}}/>, form);
 
  ReactDOM.unmountComponentAtNode(form);
});