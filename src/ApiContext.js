import React from 'react'

export default React.createContext({
  members: [],
  items: [],
  addItem: () => {},
  addMember: () => {},
  deleteItem: () => {},
  deleteMember: () => {},
  updateItem: () => {},
  updateMember: () => {},
  
})