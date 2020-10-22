import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import { Link } from 'react-router-dom'
import './AddItem.css'

export default class AddItem extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  
  static contextType = ApiContext;

  handleAddItem = e => {
    e.preventDefault()
    const newItem = {
      item_name: e.target['item_name'].value,
      item_text: e.target['item_text'].value, 
      item_type: e.target['item_type'].value,
      points: e.target['points'].value,
      member_id: e.target['note-member-id'].value,
    }
  
    fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(res => {
      if(!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then( (mem) => {
      this.context.addItem(mem)
      this.props.history.push('/items')
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const { members=[] } = this.context || {}
    
    return (
      <form  onSubmit={this.handleAddItem}>
        <h2>Add new Item</h2>
        <div>
          <label htmlFor='item_name'>Gish Item</label>
          <input type='text' name='item_name' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='item_text'>Description</label>
          <input type='text' name='item_text' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='item_type'>Type</label>
          <label><input type='radio' name='item_type' value='image'/>Image</label>
          <label><input type='radio' name='item_type' value='video'/>Video</label>
          {/* <input type='text' name='item_type'/> */}
        </div>
        <div>
          <label htmlFor='points'>Points</label>
          <input type='text' name='points' required/>
        </div>
        <select id='note-member-select' name='note-member-id'>
          <option value={null}>...</option>
          {members.map(member =>
            <option key={member.id} value={member.id}>
              {member.gish_name}
            </option>
          )}
        </select>
        <div>
          <Link to={`/items`}>
            <button type='reset'>
              Cancel
            </button>
          </Link>
          <button type='submit'>
              Save
          </button>
        </div>
      </form>

    )
  }
}