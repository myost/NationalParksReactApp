import React, { Component } from 'react';
import './App.css';
import Page from './components/page';
import Search from './components/search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Search/>
      </div>
    );
  }
}

export default App;
