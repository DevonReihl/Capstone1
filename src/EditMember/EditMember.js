import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import './EditMember.css'

export default class EditMember extends React.Component {
  static defaultProps = {
    onUpdateItem: () => {},
  } 
  static contextType = ApiContext;

  handleUpdateMember = (e, memberid) => {
    e.preventDefault()
    const memberEdit = {
      gishname: e.target.gishname.value,
      fullname: e.target.fullname.value, 
      phone: e.target.phone.value,  
    }
    fetch(`${config.API_ENDPOINT}/members/${memberid}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(memberEdit)
    })
    .then(res => {
      if (!res.ok)
      return res.json().then(e => Promise.reject(e))
    })
    .then(() => {
      this.context.updateMember({...memberEdit, id: memberid})
      this.props.history.push('/members')
    })
    .catch(error => {
      console.error({ error })
    })
  }

  render() {
    const { memberId } = this.props.match.params
    // eslint-disable-next-line
    const member = this.context.members.find(mem => mem.id == memberId) || { content: '' }
    return (      
      <form onSubmit={e => this.handleUpdateMember(e, memberId)}>
        <h2>Update your info</h2>
        <div>
          <label htmlFor='gishname' name='gishname' id='gishname'>Gish Name</label>
          <input type='text' name='gishname' defaultValue={member.gishname} required/>
        </div>
        <div>
          <label htmlFor='fullname' name='fullname' id='fullname'>Full Name</label>
          <input type='text' name='fullname' defaultValue={member.fullname} required/>
        </div>
        <div>
          <label htmlFor='phone' name='phone' id='phone'>Phone</label>
          <input type='text' name='phone' size='20' defaultValue={member.phone} />
        </div>
        <div>
        <button type='reset'aria-label="Center Align">
            Cancel
        </button>
        <button type='submit'aria-label="Center Align">
            Save
        </button>
       </div>
      </form>

    )
  }
}