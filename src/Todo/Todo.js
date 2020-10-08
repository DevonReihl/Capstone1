import React from 'react'
import ApiContext from '../ApiContext'
import './Todo.css'

export default class Todo extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      <section>
        <div>
          <h2> My Hunt</h2>
        </div>
        <ul>
          
        </ul>
      </section>
    )
  }
}