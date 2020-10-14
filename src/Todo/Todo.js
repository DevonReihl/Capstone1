import React from 'react'
import ApiContext from '../ApiContext'
import { getItemsForMember } from '../helpers'
import config from '../config'
import './Todo.css'

export default class Todo extends React.Component {

  static defaultProps = {
    onDeleteItem: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = (e, itemid) => {
    e.preventDefault()
    console.log('HELP ME DELETE?!?', itemid)

    fetch(`${config.API_ENDPOINT}/items/${itemid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok)
        return res.json().then(e => Promise.reject(e))
        // return res.json()
    })
    .then(() => {
      this.context.deleteItem(itemid)
      // this.onDeleteItem(itemid)
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const { memberId } = this.props.match.params
    const { items=[] } = this.context
    const myHunt = getItemsForMember(items, memberId)

    return (
      <section className='list'>
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
              <button
              className='Item-delete'
              type='button'
              onClick= { e => this.handleClickDelete(e, item.id)}>
                Delete
              </button><hr/> 
            </li>
          )}
        </ul>
      </section>
    )
  }
}