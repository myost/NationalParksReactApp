// adding a comment test - madi
import React, { Component } from 'react';
import './App.css';
import parks from './components/parks.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <parks />
      </div>
    );
  }
}

export default App;
