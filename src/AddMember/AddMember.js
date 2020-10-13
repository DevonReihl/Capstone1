import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddMember.css'

export default class AddMember extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  
  static contextType = ApiContext;

  handleAddMember = e => {
    e.preventDefault()
    const newMember = {
      gishname: e.target.gishname.value,
      fullname: e.target.fullname.value, 
      phone: e.target.phone.value,
    }
    console.log('YOU CAN ADD NOW', newMember)
    fetch(`${config.API_ENDPOINT}/members`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newMember)
    })
    .then(res => {
      if(!res.ok)
      return res.json().then(e => Promise.reject(e))
    })
    .then( () => {
      this.context.addMember({...newMember})
      this.props.history.push('/')
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {

    return (
      <form  onSubmit={this.handleAddMember}>
        <h2>Add new member</h2>
        <div>
          <label htmlFor='gishname'>Gish Name</label>
          <input type='text' name='gishname' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='fullname'>Full Name</label>
          <input type='text' name='fullname' minLength='8' required/>
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='phone'/>
        </div>
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