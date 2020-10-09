import React from 'react'
import ApiContext from '../ApiContext'
// import config from '../config'
import './AddMember.css'

export default class EditMember extends React.Component {
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
          <label htmlFor='gishname'>Gish Name</label>
          <input type='text' name='gishname'/>
        </div>
        <div>
          <label htmlFor='fullname'>Full Name</label>
          <input type='text' name='fullname'/>
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='phone'/>
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