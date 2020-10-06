import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import Header from '../Header/Header'
import About from '../About/About'
// import Todo from '../Todo/Todo'
import Members from '../Members/Members'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import HomeImage from '../HomeImage/HomeImage'

class App extends Component {

  state = {
    team_members:[],
    hunt_items: [],
  }

  // componentsDidMount() {
  //   api GET calls
  // }
  
  //handle functions

  render(){
    return (
      <>
        <MainNav />
        <main className='App'>
          <Header />
          <Route exact path='/' component= {HomeImage} />
          <Route path='/about' component= {About} />
          <Route path='/gallery' component= {Gallery} />
          <Route path='/members' component= {Members} />
          {/* <Route path='/members' component= {Todo} /> */}
          
        </main>
        <Footer />
      </>
    )
  }
}

export default App;