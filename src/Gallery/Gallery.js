import React from 'react'
import Iframe from 'react-iframe'
import assbutt from './images/assbutt.jpg'
import workspaceForSpider from './images/workspaceForSpider.jpg'
import scrollYourToiletPaper from './images/scrollYourToiletPaper.jpg'
import toastedMarshmellowArt from './images/toastedMarshmellowArt.jpg'
import oregonNationalBird from './images/oregonNationalBird.jpg'
import whereNoManHasGoneBefore from './images/whereNoManHasGoneBefore.jpg'
import monsterUnderTheBed from './images/monsterUnderTheBed.jpg'
import JensenPie from './images/JensenPie.jpg'
import fishingForComplements from './images/fishingForComplements.jpg'
import smokeyTheBear from './images/smokeyTheBear.jpg'
import bakedHighTops from './images/bakedHighTops.jpg'
import officePaperWeddingDress from './images/officePaperWeddingDress.jpg'
import './Gallery.css'

export default class Gallery extends React.Component {
  render() {
    return (
      <section>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/jn5XrI-CuWE" allowFullScreen/>
          <div className="desc">2020 Social distancing, Choreographed "Don't Stand so Close To Me"</div>
        </div>
        <div className="gallery">
            <img src={officePaperWeddingDress} alt="Wedding Dress"/>
          <div className="desc">Wedding dress made completely of office paper</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/CobyPnbQp08" allowFullScreen />
          <div className="desc">2019 Item #74 Stop motion CPR</div>
        </div>
        <div className="gallery">
            <img src={assbutt} alt="GISH mascot"/>
          <div className="desc">An Assbutt, part donkey-part butterfly</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/KoelVD7GP3I" allowFullScreen />
          <div className="desc">Backwards poem (seriously play it backwards)</div>
        </div>
        <div className="gallery">
            <img src={monsterUnderTheBed} alt="Monster under the bed"/>
          <div className="desc">Item #12 A child reading a bedtime story to the monster under their bed. The monster 
            should be charmed and cozy and cuddled up.</div>
        </div>

        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/s79RnuTBkdw" allowFullScreen />
          <div className="desc">2018 Item #157 Watermelon Fishing</div>
        </div>
        <div className="gallery">
            <img src={JensenPie} alt="Jensen skittle pie"/>
          <div className="desc">Item #70 - Over the years, Jensen Ackles has been depicted in Skittles, 
            but we all know his character Dean loves pie. Let's do a crossover: Bake a Skittles pie with a portrait of 
            Jensen baked into the upper crust</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/Lt5PCAU5sS8" allowFullScreen/>
          <div className="desc">Item 62 Nothings"s more annying than cracking an egg over the campfire and getting 
            shells in the pan. But now with new, patent-pending GISHCORP Zippable Eggs, it's no longer a problem!</div>
        </div>
        <div className="gallery">
            <img src={whereNoManHasGoneBefore} alt="where no man has stepped before"/>
          <div className="desc">Item #120: Neil Armstrong stepped on to the Moon 50 years ago. To memorialize this 
          amazing achievement, make your own “One Small Step” monument.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/MJCqJSq1RDc" allowFullScreen/>
          <div className="desc">Fire station relief</div>
        </div>
        <div className="gallery">
            <img src={toastedMarshmellowArt} alt="Jared Marshmellow"/>
          <div className="desc">Item# 68: I’m not saying Jared Padalecki is a big softie, 
            but here’s a portrait of him toasted onto a marshmallow. Just the way it should be.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/axTbnSe527Q" allowFullScreen/>
          <div className="desc">Item 100: Write a phrase on a piece of wood of something negative you say 
            about yourself to silence yourself. Burn the wood and use the ashes to write something affirming.</div>
        </div>
        <div className="gallery">
            <img src={fishingForComplements} alt="Fishing for Complements"/>
          <div className="desc">Item #196: You've been out fishing for compliments, and you just snagged a whopper.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/Pgd5UO_phhc" allowFullScreen/>
          <div className="desc">2018 Item #105 Head Shoulders Knees and Toes</div>
        </div>
        <div className="gallery">
            <img src={workspaceForSpider} alt="Workspace for a spider"/>
            <div className="desc">Item #76 "Not all insects aspire to just be insects. Without harming 
              it, get insect to sit on a sheet of paper and doodle an environment around it showing it at its job or hobby."</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/i_7cvm-gYyg" allowFullScreen/>
          <div className="desc">Dispense Pudding from 5 feet away</div>
        </div>
        <div className="gallery">
            <img src={oregonNationalBird} alt="Oregon State bird"/>
            <div className="desc">Item 124: Take a picture of yourself dressed as your state bird holding 
              your state flower.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/gNWnwEAqtR0" allowFullScreen/>
          <div className="desc">2018 Item #178 Get strangers to sing</div>
        </div>
        <div className="gallery">
            <img src={bakedHighTops} alt="Baked shoes"/>
            <div className="desc">#100 Let’s see a freshly baked pair of “high-top shoes” made 
              entirely of freshly baked bread. Prove that they fit your feet perfectly.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/bzaab85YjSo" allowFullScreen/>
          <div className="desc">2018 item #89 Robot Lipstick</div>
        </div>
        <div className="gallery">
            <img src={smokeyTheBear} alt="Clootie Dumpling"/>
            <div className="desc">Item #69 Go to your local fire station dressed as a dalmatian or Smokey the Bear and create a relaxation station to thank them for their work.</div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/6lEgDCHqn3Y" allowFullScreen/>
          <div className="desc">Item 178: When you want to say something sweet to your loved one, 
            you always use s’mores code.</div>
        </div>
        <div className="gallery">
            <img src={scrollYourToiletPaper} alt="Toilet paper facebook"/>
            <div className="desc">#56: A lot of people use their cell phones while in the bathroom, 
              which is really gross. Re-create a verified social media account on a roll of toilet 
              paper- images and all. </div>
        </div>
        <div className="gallery">
          <Iframe url="https://www.youtube.com/embed/bFD2fcwPRzk" allowFullScreen/>
          <div className="desc">Make up a word and give it a definition worthy of being added to Websters dictionary</div>
        </div>
      </section>
    )
  }
} 