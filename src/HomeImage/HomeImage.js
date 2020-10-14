import React from 'react'
import gish from './gish.jpg'
import './HomeImage.css'

export default class HomeImage extends React.Component {
  render() {
    return(
      <div>
        <img src={gish} alt="GISH"/>
        <p>This app is for the leader of team Literacy Bandits, organized by GISH. 
          In it the leader can add and update items as needed. They can also add update and delete 
          members of the team. Each member has a list of items which is where the leader can delete 
          the items as members complete them.</p>
      </div>
    )
  }
} 