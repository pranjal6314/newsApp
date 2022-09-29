// db32f282ca5e4aee8ec08d58e8801c4a
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {  
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize="10"/>
      </div>
    )
  }
}