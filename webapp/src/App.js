import React, { Component } from 'react';
import Header from './components/header/Header';
import PinsFeed from './components/pins-feed/PinsFeed';
import FloatingMenu from './components/floating-menu/FloatingMenu';
import './App.css';
import './services/fontAwesome'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header/>
        <PinsFeed/>
        <FloatingMenu />
      </div>
    );
  }
}

export default App;
