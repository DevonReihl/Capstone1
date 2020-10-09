import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'

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
              <Link
              to={`/members/edit/${member.id}`}
              >
                <button>Update Member</button></Link>     
            </li> 
            
        </ul>
      </section>
    )
  }
}
