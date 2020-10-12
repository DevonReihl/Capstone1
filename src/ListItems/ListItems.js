import React from 'react'
import ApiContext from '../ApiContext'
import './ListItems.css'

export default class Todo extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;

  render() {
    const { items=[] } = this.context
    return (
      <section>
        <div>
          <h2> GISH hunt</h2>
        </div>
        <ul>
        {items.map(item =>
            <li key={item.id}>
              Item #{item.id}
              <div>Item name: {item.itemName}</div>
              <div>Item desc: {item.itemText}</div>
              <div>Item type: {item.itemType}</div>
              <div>Points: {item.points}</div>
              {/* <button>Add Item to my list</button><hr/>  */}
            </li>
          )}
        </ul>
      </section>
    )
  }
}