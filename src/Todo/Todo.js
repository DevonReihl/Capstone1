import React from 'react'
import ApiContext from '../ApiContext'
import { getItemsForMember } from '../helpers'
import './Todo.css'

export default class Todo extends React.Component {
  static contextType = ApiContext;

  render() {
    const { memberId } = this.props.match.params
    const { items=[] } = this.context
    const myHunt = getItemsForMember(items, memberId)
    console.log('ToDo Items', items)
    console.log('MemberId', memberId)
    console.log(items.memberid)
    return (
      <section>
        <div>
          <h2> My Hunt</h2>
        </div>
        <ul>
        {myHunt.map(item =>
            <li key={item.id}>
              <div>Item name: {item.itemName}</div>
              <div>Item desc: {item.itemText}</div>
              <div>Item type: {item.itemType}</div>
              <div>Points: {item.points}</div>
              <button>Delete</button><hr/> 
            </li>
          )}
        </ul>
      </section>
    )
  }
}