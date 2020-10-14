import React from 'react';
import ReactDOM from 'react-dom';
import ApiContext from '../ApiContext';
import AddItem from './AddItem';

it('renders without crashing', () => {
 
  const div = document.createElement('div');
  
  ReactDOM.render(<ApiContext.Provider value={{members: [], items: []}}><AddItem /></ApiContext.Provider>, div);
 
  ReactDOM.unmountComponentAtNode(div);
});
