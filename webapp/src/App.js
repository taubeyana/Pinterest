import React, { Component } from 'react';
import Header from './components/header/Header';
import PinsFeed from './components/pins-feed/PinsFeed';
import FloatingMenu from './components/floating-menu/FloatingMenu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,  faComment, faBell, faEllipsisH ,faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faSearch, faComment, faBell, faEllipsisH, faPlus);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PinsFeed/>
        <FloatingMenu />
      </div>
    );
  }
}

export default App;
