import React from 'react'
import './Todo.css'

export default class Todo extends React.Component {
  render() {
    return (
      <section>
        <div>
          <h2> My Hunt</h2>
        </div>
        <ul>
          <li>
            <h3>Item #100</h3>
            <p>Some sort of crash thing that is really silly and fun.
              It must be done with someone from another team.
            </p>
            <button>Complete</button><button>Remove</button>
          </li>
          <li>
            <h3>Item #34</h3>
            <p>Some sort of crash thing that is really silly and fun.
              This is food related.
            </p>
            <button>Complete</button><button>Remove</button>
          </li>
          <li>
            <h3>Item #209</h3>
            <p>Some sort of crash thing that is really silly and fun.
              This involves community building
            </p>
            <button>Complete</button><button>Remove</button>
          </li>
        </ul>
      </section>
    )
  }
}