import React, { Component } from 'react';
import Header from './components/header/Header';
import PinsFeed from './components/pins-feed/PinsFeed';
import './App.css';
import './services/fontAwesome'


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header/>
        <PinsFeed/>
        
      </div>
    );
  }
}

export default App;
