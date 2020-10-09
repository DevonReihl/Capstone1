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

  handleClickDelete = e => {
    e.preventDefault()
    // const itemId = this.props.id
    console.log('HELP ME DELETE?!?')

    // fetch(`${config.API_ENDPOINT}/members/:memberId/todo/${itemId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    // })
    // .then(res => {
    //   if(!res.ok)
    //     return res.json().then(e => Promise.reject(e))
    // })
    // .then(() => {
    //   this.context.deleteItem(itemId)
    //   this.props.onDeleteItem(itemId)
    // })
    // .catch(error => {
    //   console.error({ error })
    // })
  }

  render() {
    const { memberId } = this.props.match.params
    const { items=[] } = this.context
    const myHunt = getItemsForMember(items, memberId)

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
              <button
              className='Item-delete'
              type='button'
              onClick={this.handleClickDelete}>
                Delete
              </button><hr/> 
            </li>
          )}
        </ul>
      </section>
    )
  }
}