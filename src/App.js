import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph'
import ReactLink from './components/ReactLink'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph>
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>
          <Paragraph>
            Another paragraph.
          </Paragraph>
          <ReactLink />
        </header>
      </div>
    );
  }
}

export default App;
