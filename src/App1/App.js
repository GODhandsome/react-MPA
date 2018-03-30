import React, { Component } from 'react';
import './App.css';
import First from './components/First';
import img from './static/118.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.123
        </p>
        <First/>
        <img src={img}/>
      </div>
    );
  }
}

export default App;
