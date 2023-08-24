import React, { Component } from 'react'
import News from './components/News'
import MyNavbar from './components/MyNavbar'
import Temp from './components/Temp'
import Newsitem from './components/Newsitem'
import { Route,Routes } from 'react-router-dom';
import Stocks from './components/stocks';
import Sports from './components/sports'


export default class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar></MyNavbar>
        {/* <News category="Trending"></News>
        <Temp category="Trending"></Temp> */}
        <Routes>
      
      <Route path="/"  element={<Stocks/>} />
      <Route path="/trending"  element={<Temp category="trending"/>}/>
      <Route path="/science"  element={<Temp category="science"/>}/>
      <Route path="/sports"  element={<Sports/>}/>
      <Route path="/fashion"  element={<Temp category="fashion"/>}/>
      </Routes>
      </div>
    )
  }
}
