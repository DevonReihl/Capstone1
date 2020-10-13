import React from 'react';
import ReactDOM from 'react-dom';
import HomeImage from './HomeImage';

it('renders without crashing', () => {
  const img = document.createElement('img');

  ReactDOM.render(<HomeImage />, img);
  
  ReactDOM.unmountComponentAtNode(img);
});