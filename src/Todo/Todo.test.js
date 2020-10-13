import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

it('renders without crashing', () => {
  const section = document.createElement('section');

  ReactDOM.render(<Todo match={{params: {memberId: 1}}}/>, section);
  
  ReactDOM.unmountComponentAtNode(section);
});