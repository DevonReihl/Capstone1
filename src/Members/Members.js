import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'

import './Members.css'

export default class Members extends React.Component {
  static contextType = ApiContext;

  render() {
    const {members=[] } = this.context
    return (
      <section>
        <div>
          <h2> TEAM members</h2>
        </div>
        <ul>
          
          {members.map((member) =>
            <li key={member.id}>
              <Link
                className='member-link'
                to={`/members/${member.id}/todo`}
              >
                <h1>{member.gish_name}</h1>
              </Link>
              <Link to={`/members/${member.id}`}>
                <button>View member info</button>
              </Link>
            </li> 
          )}
          
        </ul>
        <Link to={`/add-member`}>
            <button>Add member</button>
        </Link>
      </section>
    )
  }
}
