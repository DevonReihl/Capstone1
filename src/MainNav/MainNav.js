import React from 'react'
import './MainNav.css'

export default class MainNav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul class="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="members.html">Members</a></li>
        </ul>
      </nav>
    )
  }
}