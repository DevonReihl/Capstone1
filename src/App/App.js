import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import Header from '../Header/Header'
import About from '../About/About'
import Todo from '../Todo/Todo'
import Members from '../Members/Members'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import HomeImage from '../HomeImage/HomeImage'
import ApiContext from '../ApiContext'

class App extends Component {

  state = {
    members:[],
    items: [],
  }

  // componentsDidMount() {
  //   api GET calls
  // }
  
  //handle functions

  render(){
    const value = {
      members: this.state.members,
      items: this.state.items,
    }
    return (
      <ApiContext.Provider value={value}>
        <MainNav />
        <main className='App'>
          <Header />
          <Route exact path='/' component= {HomeImage} />
          <Route path='/about' component= {About} />
          <Route path='/gallery' component= {Gallery} />
          <Route exact path='/members' component= {Members} />
          <Route path='/members/todo' component= {Todo} />
          
        </main>
        <Footer />
      </ApiContext.Provider>
    )
  }
}

export default App;