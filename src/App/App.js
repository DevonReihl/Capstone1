import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import Header from '../Header/Header'
import About from '../About/About'
import Todo from '../Todo/Todo'
import Members from '../Members/Members'
import ListItems from '../ListItems/ListItems'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import HomeImage from '../HomeImage/HomeImage'
import MemberInfo from '../MemberInfo/MemberInfo'
import EditMember from '../EditMember/EditMember'
import EditItem from '../EditItem/EditItem'
import AddMember from '../AddMember/AddMember'
import AddItem from '../AddItem/AddItem'
import ApiContext from '../ApiContext'
import config from '../config'

class App extends Component {

  state = {
    members:[],
    items: [],
  }

  componentDidMount() {
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
          membersRes.json()
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

  //add member
  addMember = member => {
    this.setState({
      members: [
        ...this.state.members,
        member
      ]
    })
  }

  //add item
  addItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }
  //update member
  updateMember = member => {
    const newMembers = this.state.members.map(mem =>
      // eslint-disable-next-line
      (mem.id == member.id)
      ? member : mem)
      this.setState({
        members: newMembers
      })
  };

  updateItem = item => {
    const newItems = this.state.items.map(it =>
      // eslint-disable-next-line
      (it.id == item.id)
      ? {...it, ...item} : it)
      this.setState({
        items: newItems
      })
  };

  //delete item
  deleteItem = itemId => {
    this.setState({
      // eslint-disable-next-line
      items: this.state.items.filter(item => item.id !== itemId)
    })
  }

   //delete member
   deleteMember = memberId => {
    this.setState({
      // eslint-disable-next-line
      members: this.state.members.filter(member => member.id !== memberId)
    })
  }

  render(){
    const value = {
      members: this.state.members,
      items: this.state.items,
      addMember: this.addMember,
      addItem: this.addItem,
      deleteItem: this.deleteItem,
      deleteMember: this.deleteMember,
      updateMember: this.updateMember,
      updateItem: this.updateItem,
      
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
          <Route exact path='/items' component= {ListItems} />   
          <Route exact path='/members/:memberId/todo' component= {Todo} />
          <Route exact path='/members/:memberId' component= {MemberInfo} />
          <Route exact path='/members/edit/:memberId' component= {EditMember} />
          <Route path='/item/:itemId' component= {EditItem} />
          <Route path='/add-member' component= {AddMember} />
          <Route path='/add-item' component= {AddItem} />
          
        </main>
        <Footer />
      </ApiContext.Provider>
    )
  }
}

export default App;