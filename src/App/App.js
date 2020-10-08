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
import config from '../config'

class App extends Component {

  state = {
    members:[],
    items: [],
  }

  componentsDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`),
      fetch(`${config.API_ENDPOINT}/members`),
    ])
      .then(([itemsRes, membersRes]) => {
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e))
        if (!membersRes.ok)
          return membersRes.json().then(e => Promise.reject(e))
        return Promise.all([
          itemsRes.json(),
          membersRes.json(),
        ])
      })
      .then(([items, members]) => {
        this.setState({ items, members })
      })
      .catch(error => {
        console.error({ error })
      })
  }
  
  //handle functions

  render(){
    const value = {
      members: this.state.members,
      items: this.state.items
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