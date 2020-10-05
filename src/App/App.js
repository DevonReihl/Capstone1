import React, {Component} from 'react';
import MainNav from '../MainNav/MainNav';
import Header from '../Header/Header';
// import Todo from '../Todo/Todo';
// import Members from '../Members/Members';
// import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer';

//add routes for:
//Gallery,
//Members,
//About,
//Contact,
//Todo

class App extends Component {
  render(){
    return (
      <>
        <MainNav />
        <main className='App'>
          <Header />
          <section>
            <p>Learn more about <a href="https://www.gish.com/" target="_blank">GISH</a> before you join the fun?</p>
          </section>
          {/* <Members /> */}
          {/* <Todo /> */}
          {/* <Gallery /> */}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;