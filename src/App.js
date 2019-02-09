import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph'
import ReactLink from './components/ReactLink'


class App extends Component {
  state = {
    isBold: false,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Paragraph bold={this.state.isBold}>
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>
          <Paragraph bold={this.state.isBold}>
            Another bold paragraph.
          </Paragraph>
          <ReactLink url="https://reactjs.org" label="Learn React" />
          <button onClick={() => this.setState({ isBold: true })}>Pogrub</button>
          <button onClick={() => this.setState({ isBold: false })}>Odgrub</button>
        </header>
      </div>
    );
  }
}

export default App;
