import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import { Link } from 'react-router-dom'
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
      gish_name: e.target.gish_name.value,
      full_name: e.target.full_name.value, 
      phone: e.target.phone.value,
    }
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
      return res.json()
    })
    .then( (mem) => {
      this.context.addMember(mem)
      this.props.history.push('/members')
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
          <label htmlFor='gish_name'>Gish Name</label>
          <input type='text' name='gish_name' minLength='5' required/>
        </div>
        <div>
          <label htmlFor='full_name'>Full Name</label>
          <input type='text' name='full_name' minLength='8' required/>
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input type='text' name='phone'/>
        </div>
        <div>
        <Link to={`/members`}>
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