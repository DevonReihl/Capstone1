import React from 'react'
import { Link } from 'react-router-dom'
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
      <section className= 'list'>
        <div>
          <h2> GISH hunt</h2>
        </div>

        <div><Link to={`/add-Item`}>
            <button>Add Item</button>
        </Link></div>
        <ul>
        {items.map(item =>
            <li key={item.id}>
              Item #{item.id}
              <div>Item name: {item.itemName}</div>
              <div>Item desc: {item.itemText}</div>
              <div>Item type: {item.itemType}</div>
              <div>Points: {item.points}</div>
              <Link to={`/item/${item.id}`}><button>Edit Item</button></Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}