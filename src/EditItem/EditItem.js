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
      itemname: e.target['itemname'].value,
      itemtext: e.target['itemtext'].value, 
      itemtype: e.target['itemtype'].value,
      points: e.target['points'].value,
      memberid: e.target['note-member-id'].value,  
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

  // handleClickDeleteItem = (e, itemid) => {
  //   e.preventDefault()

  //   fetch(`${config.API_ENDPOINT}/items/${itemid}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //   })
  //   .then(res => {
  //     if(!res.ok)
  //       return res.json().then(e => Promise.reject(e))
  //   })
  //   .then(() => {
  //     this.context.deleteItem(itemid)
  //     this.props.history.push('/items')
  //   })
  //   .catch(error => {
  //     console.error({ error })
  //   })
  // }

  render() {
    const { members=[] } = this.context
    const { itemId } = this.props.match.params
    // eslint-disable-next-line
    const item = this.context.items.find(item => item.id == itemId) || { content: '' }

    return (      
      <form onSubmit={e => this.handleUpdateItem(e, itemId)}>
        <h2>Update your info</h2>
        <div>
          <label htmlFor='itemname'>Gish Item</label>
          <input type='text' name='itemname' defaultValue={item.itemName} required/>
        </div>
        <div>
          <label htmlFor='itemtext'>Description</label>
          <input type='text' name='itemtext' defaultValue={item.itemText} required/>
        </div>
        <div>
          <label htmlFor='itemtype'>Type (image or video)</label>
          <input type='text' name='itemtype' defaultValue={item.itemType} />
        </div>
        <div>
          <label htmlFor='points'>Points</label>
          <input type='text' name='points' defaultValue={item.points} />
        </div>
        <select id='note-member-select' name='note-member-id'>
          {members.map(member =>
            <option key={member.id} value={member.id}>
              {member.gishname}
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