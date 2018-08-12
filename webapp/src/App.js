import React, { Component } from 'react';
import Header from './components/header/Header';
import PinsFeed from './components/pins-feed/PinsFeed';
import FeedButtons from './components/feed-buttons/FeedButtons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,  faComment, faBell, faEllipsisH  } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faSearch, faComment, faBell, faEllipsisH);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PinsFeed/>
        <FeedButtons />
      </div>
    );
  }
}

export default App;
