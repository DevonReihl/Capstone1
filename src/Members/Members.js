import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import './Members.css'

export default class Members extends React.Component {
  static contextType = ApiContext;

  render() {
    const { members=[] }= this.context
    return (
      <section>
        <div>
          <h2> TEAM members</h2>
        </div>
        <ul>
            <li >
              <Link
                className='member-link'
                to={`/members/todo`}
              >
                {/* {member.name} */}
                TanyaScovill
              </Link>
            </li>  
        </ul>
      </section>
    )
  }
}