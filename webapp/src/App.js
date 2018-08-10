import React, { Component } from 'react';
import Header from './components/header/Header';
import logo from './img/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faSearch);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
