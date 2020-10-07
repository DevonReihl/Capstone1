import React from 'react'
import Iframe from 'react-iframe'
import assbutt from './images/assbutt.jpg'
// import workspaceForSpider from './images/workspaceForSpider.jpg'
import teamPortrait from './images/teamPortrait.jpg'
import toastedMarshmellowArt from './images/toastedMarshmellowArt.jpg'
// import oregonNationalBird from './images/oregonNationalBird.jpg'
// import whereNoManHasGoneBefore from './images/whereNoManHasGoneBefore.jpg'
import monsterUnderTheBed from './images/monsterUnderTheBed.jpg'
import JensenPie from './images/JensenPie.jpg'
import fishingForComplements from './images/fishingForComplements.jpg'
import ClootieDumpling from './images/ClootieDumpling.jpg'
// import dogsInSpace from './images/dogsInSpac.jpg'
import MishaCollins from './images/MishaCollins.jpg'
import officePaperWeddingDress from './images/officePaperWeddingDress.jpg'
import './Gallery.css'

export default class Gallery extends React.Component {
  render() {
    return (
      <section>
        <div className="gallery">
            <img src={MishaCollins} alt="GISH"/>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/jn5XrI-CuWE" allowFullScreen/>
          <div className="desc">Add a description of the image here</div>
        </div>
        <div className="gallery">
            <img src={officePaperWeddingDress} alt="GISH"/>
          <div className="desc">Weddingdress made completely of office paper</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/CobyPnbQp08" allowFullScreen />
          <div className="desc">Add a description of the image here</div>
        </div>
        <div className="gallery">
            <img src={assbutt} alt="GISH"/>
          <div className="desc">An Assbutt, part donkey-part butterfly</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/KoelVD7GP3I" allowfullscreen />
          <div className="desc">Backwards poem (seriously play it backwards)</div>
        </div>
        <div className="gallery">
            <img src={monsterUnderTheBed} alt="GISH"/>
          <div className="desc">Sometimes the monsters get scared too</div>
        </div>

        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/GCWwyJbiOJI" allowfullscreen />
          <div className="desc">Add a description of the image here</div>
        </div>
        <div className="gallery">
            <img src={JensenPie} alt="GISH"/>
          <div className="desc">Pie crust portrait of Jensen Ackles</div>
        </div>
        <div classNameName="gallery">
          <Iframe url="fill in" allowfullscreen/>
          <div className="desc">Zipper egg</div>
        </div>
        <div className="gallery">
            <img src={teamPortrait} alt="GISH"/>
          <div className="desc">Team Literacy Bandits at there finest</div>
        </div>
        <div classNameName="gallery">
          <Iframe url="https://www.youtube.com/embed/GCWwyJbiOJI" allowfullscreen/>
          <div className="desc"></div>
        </div>
        <div className="gallery">
            <img src={toastedMarshmellowArt} alt="GISH"/>
          <div className="desc">Jared Padalecki burnt into a marshmellow</div>
        </div>
        <div classNameName="gallery">
          <Iframe url="fill in" allowfullscreen/>
          <div className="desc">Add a description of the image here</div>
        </div>
        <div className="gallery">
            <img src={fishingForComplements} alt="GISH"/>
          <div className="desc">Fishing for complements</div>
        </div>
        <div classNameName="gallery">
          <Iframe url="fill in" allowfullscreen/>
          <div className="desc">Add a description of the image here</div>
        </div>
        <div className="gallery">
            <img src={ClootieDumpling} alt="GISH"/>
        </div>
        <div classNameName="gallery">
          <Iframe url="https://www.youtube.com/embed/i_7cvm-gYyg" allowfullscreen/>
          <div className="desc">Add a description of the image here</div>
        </div>
      </section>
    )
  }
} 