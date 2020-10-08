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
    const { memberId } = this.props.match.params
    // const member = findMember(this.context.members, Number(this.props.match.params.memberId)) || { content: '' }
    const member = this.context.members.find(mem => mem.id == memberId) || { content: '' }
    return (
      <section key={member.id}>
        <div>
          <h2> {member.gishname}</h2>
        </div>
        <ul>
            <li >
              <div>{member.fullname}</div>
              <div>{member.phone}</div>
              <button>Update Member</button>     
            </li> 
            
        </ul>
      </section>
    )
  }
}
