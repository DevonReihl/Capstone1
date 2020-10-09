import React from 'react'
import ApiContext from '../ApiContext'
// import config from '../config'
import './AddItem.css'

export default class AddItem extends React.Component {
  static contextType = ApiContext;

  handleAddMember = e => {
    e.preventDefault()
    console.log('YOU CAN UPDATE NOW')
  }

  render() {
    // const { memberId } = this.props.match.params

    return (
      <form>
        <h2>Update your info</h2>
        <div>
          <label htmlFor='itemName'>Item name</label>
          <input type='text' name='itemName'/>
        </div>
        <div>
          <label htmlFor='itemText'>Item Description</label>
          <input type='text' name='itemText'/>
        </div>
        <div>
          <label htmlFor='pointValue'>Item Points</label>
          <input type='text' name='pointValue'/>
        </div>
        <div>
          <label htmlFor='itemType'>Item Type</label>
          <input type='text' name='itemType'/> 
          {/* Might switch to radio buttons */}
        </div>
        <div>
        <button type='reset'>
            Cancel
        </button>
        <button type='button' onClick={this.handleAddMember}>
            Save
        </button>
       </div>
      </form>

    )
  }
}