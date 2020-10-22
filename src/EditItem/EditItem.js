import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import './EditItem.css'

export default class EditItem extends React.Component {
  static defaultProps = {
    onUpdateItem: () => {},
  } 
  static contextType = ApiContext;

  handleUpdateItem = (e, itemid) => {
    e.preventDefault()
    const itemEdit = {
      item_name: e.target['item_name'].value,
      item_text: e.target['item_text'].value, 
      item_type: e.target['item_type'].value,
      points: e.target['points'].value,
      member_id: e.target['note-member-id'].value,  
    }
    
    fetch(`${config.API_ENDPOINT}/items/${itemid}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(itemEdit)
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      
    })
    .then(() => {
      this.context.updateItem( {...itemEdit, id: itemid, })
      this.props.history.push('/items')
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const { members=[] } = this.context
    const { itemId } = this.props.match.params
    // eslint-disable-next-line
    const item = this.context.items.find(item => item.id == itemId) || { content: '' }

    return (      
      <form onSubmit={e => this.handleUpdateItem(e, itemId)}>
        <h2>Update your info</h2>
        <div>
          <label htmlFor='item_name'>Gish Item</label>
          <input type='text' name='item_name' defaultValue={item.item_name} required/>
        </div>
        <div>
          <label htmlFor='item_text'>Description</label>
          <input type='text' name='item_text' defaultValue={item.item_text} required/>
        </div>
        <div>
          <label htmlFor='item_type'>Type (image or video)</label>
          <input type='text' name='item_type' defaultValue={item.item_type} />
        </div>
        <div>
          <label htmlFor='points'>Points</label>
          <input type='text' name='points' defaultValue={item.points} />
        </div>
        <select id='note-member-select' name='note-member-id'>
          {members.map(member =>
            <option key={member.id} value={member.id}>
              {member.gish_name}
            </option>
          )}
        </select>
        <button type='submit'aria-label="Center Align">
            Save
        </button>
      </form>

    )
  }
}