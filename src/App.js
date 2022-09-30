// db32f282ca5e4aee8ec08d58e8801c4a
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
export default class App extends Component {  

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          
          <Routes>
          <Route exact path="/" element={<News key="general" pageSize={10} country="in" category='general'/>} />
          <Route exact path="/about" element={<News key="about" pageSize={10} country="in" category='about'/>} />
          <Route exact path="/business" element={<News key="business" pageSize={10} country="in" category='business'/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} country="in" category='entertainment'/>} />
          <Route exact path="/general" element={<News key="general" pageSize={10} country="in" category='general'/>} />
          <Route exact path="/health" element={<News key="health" pageSize={10} country="in" category='health'/>} />
          <Route exact path="/science" element={<News key="science" pageSize={10} country="in" category='science'/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={10} country="in" category='sports'/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={10} country="in" category='technology'/>} />
        </Routes>
        </div>
      </Router>
    )
  }
}