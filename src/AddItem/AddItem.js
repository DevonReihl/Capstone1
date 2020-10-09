import React from 'react'
import ApiContext from '../ApiContext'
// import config from '../config'
import './AddItem.css'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleAddItem = e => {
    e.preventDefault()
    const newItem = {
      itemName: e.target['itemName'].value,
      itemText: e.target['itemText'].value,
      pointsValue: e.target['pointValue'].value,
      itemType: e.target['itemType'].value,
    }
    console.log(newItem)
  }

  render() {
    // const { items=[] } = this.context

    return (
      <form>
        <h2>Update your info</h2>
        <div>
          <label htmlFor='itemName-input'>Item name</label>
          <input type='text' name='itemName' value={this.state.value} />
        </div>
        <div>
          <label htmlFor='itemText-input'>Item Description</label>
          <input type='text' name='itemText'/>
        </div>
        <div>
          <label htmlFor='pointValue-input'>Item Points</label>
          <input type='text' name='pointValue'/>
        </div>
        <div>
          <label htmlFor='itemType-input'>Item Type</label>
          <input type='text' name='itemType'/> 
          {/* Might switch to radio buttons */}
        </div>
        <div>
        <button type='reset'>
            Cancel
        </button>
        <button type='button' onClick={this.handleAddItem}>
            Save
        </button>
       </div>
      </form>

    )
  }
}