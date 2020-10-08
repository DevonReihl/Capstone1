import React from 'react'
import ApiContext from '../ApiContext'
import { findMember } from '../helpers'

import './MemberInfo.css'

export default class MemberInfo extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;


  render() {
    const { members=[] } = this.context
    const { memberId } = this.props.match.params
    const member = findMember(members, memberId) || { content: '' }
    console.log('THIS IS THE MEMBERS', members)
    console.log('THIS IS THE MEMBER ID', memberId)
    console.log('THIS IS THE MEMBER', member)
    return (
      <section key={member.id}>
        <div>
          <h2> {member.gishname}</h2>
        </div>
        <ul>
            <li >
                {member.fullname}
                {member.phone}
            </li> 
            <button>Update Member</button>
        </ul>
      </section>
    )
  }
}
