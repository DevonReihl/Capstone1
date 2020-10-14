import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
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
      itemname: e.target['itemname'].value,
      itemtext: e.target['itemtext'].value, 
      itemtype: e.target['itemtype'].value,
      points: e.target['points'].value,
      memberid: e.target['note-member-id'].value,
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
          <label htmlFor='itemname'>Gish Item</label>
          <input type='text' name='itemname' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='itemtext'>Description</label>
          <input type='text' name='itemtext' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='itemtype'>Type (image or video)</label>
          <input type='text' name='itemtype'/>
        </div>
        <div>
          <label htmlFor='points'>Points</label>
          <input type='text' name='points'/>
        </div>
        <select id='note-member-select' name='note-member-id'>
          <option value={null}>...</option>
          {members.map(member =>
            <option key={member.id} value={member.id}>
              {member.gishname}
            </option>
          )}
        </select>
        <div>
          <button type='reset'>
              Cancel
          </button>
          <button type='submit'>
              Save
          </button>
        </div>
      </form>

    )
  }
}