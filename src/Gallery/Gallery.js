import React from 'react'
import Iframe from 'react-iframe'
import assbutt from './images/assbutt.jpg'
import './Gallery.css'

export default class Gallery extends React.Component {
  render() {
    return (
      <section>
        <div class="gallery">
            <img src={assbutt} alt="GISH"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
          <Iframe url="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
            <img src={assbutt} alt="GISH"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
          <Iframe url="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
            <img src={assbutt} alt="GISH"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
          <Iframe url="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
            <img src={assbutt} alt="GISH"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
          <Iframe url="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
            <img src={assbutt} alt="GISH"/>
          <div class="desc">Add a description of the image here</div>
        </div>
        <div class="gallery">
          <Iframe url="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div class="desc">Add a description of the image here</div>
        </div>
      </section>
    )
  }
} 