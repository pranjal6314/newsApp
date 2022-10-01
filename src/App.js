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
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {  
  apiKey=process.env.REACT_APP_NEW_API
  
  // apiKey="db32f282ca5e4aee8ec08d58e8801c4a"
    state={
        progress:0
    }
    setProgress=(progress)=>{ 
        this.setState({progress:progress})

    }
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <LoadingBar color='#f11946' height={3}  progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={10} country="in" category='general'/>} />
          <Route exact path="/about" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="about" pageSize={10} country="in" category='about'/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={10} country="in" category='business'/>} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={10} country="in" category='entertainment'/>} />
          <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={10} country="in" category='general'/>} />
          <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={10} country="in" category='health'/>} />
          <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" pageSize={10} country="in" category='science'/>} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={10} country="in" category='sports'/>} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="technology" pageSize={10} country="in" category='technology'/>} />
        </Routes>
        </div>
      </Router>
    )
  }
}