import React from 'react'
import ApiContext from '../ApiContext'
import config from '../config'
import './EditMember.css'

export default class EditMember extends React.Component {
  static defaultProps = {
    onUpdateMember: () => {},
  } 
  static contextType = ApiContext;

  handleUpdateMember = (e, memberid) => {
    e.preventDefault()
    const memberEdit = {
      gish_name: e.target.gish_name.value,
      full_name: e.target.full_name.value, 
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

  handleClickDeleteMember = (e, memberid) => {
    e.preventDefault()

    fetch(`${config.API_ENDPOINT}/members/${memberid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok)
        return res.json().then(e => Promise.reject(e))
    })
    .then(() => {
      this.context.deleteMember(memberid)
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
          <label htmlFor='gish_name' name='gish_name' id='gish_name'>Gish Name</label>
          <input type='text' name='gish_name' defaultValue={member.gish_name} required/>
        </div>
        <div>
          <label htmlFor='full_name' name='full_name' id='full_name'>Full Name</label>
          <input type='text' name='full_name' defaultValue={member.full_name} required/>
        </div>
        <div>
          <label htmlFor='phone' name='phone' id='phone'>Phone</label>
          <input type='text' name='phone' size='20' defaultValue={member.phone} />
        </div>
        <div>
        <button
              className='Member-delete'
              type='button'
              onClick= { e => this.handleClickDeleteMember(e, member.id)}>
                Delete
              </button>
        <button type='submit'aria-label="Center Align">
            Save
        </button>
       </div>
      </form>

    )
  }
}