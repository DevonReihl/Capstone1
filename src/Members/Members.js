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
          {members.map(member =>
            <li key={member.id}>
              <Link
                className='member-link'
                to={`/members/todo`}
              >
                {member.gishname}
              </Link>
            </li>
          )}
        </ul>
      </section>
    )
  }
}
