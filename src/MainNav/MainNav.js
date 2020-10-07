import React from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

export default class MainNav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul className="navbar">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/members'>Members</Link></li>
        </ul>
      </nav>
    )
  }
}