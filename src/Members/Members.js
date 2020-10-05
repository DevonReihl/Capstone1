import React from 'react'
import './Members.css'

export default class Members extends React.Component {
  render() {
    return (
      <section>
        <div>
          <h2> TEAM members</h2>
        </div>
        <ul>
          <li>
            <h3>GISH profile name</h3>
            <h5>Real name</h5>
            <h5>Phone number</h5>
          </li>
          <li>
            <h3>GISH profile name</h3>
            <h5>Real name</h5>
            <h5>Phone number</h5>
          </li>
          <li>
            <h3>GISH profile name</h3>
            <h5>Real name</h5>
            <h5>Phone number</h5>
          </li>
        </ul>
      </section>
    )
  }
}