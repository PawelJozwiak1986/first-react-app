import React, { Component } from 'react';
import './App.css';
// import Paragraph from './components/Paragraph'
// import ReactLink from './components/ReactLink'
import Bobr from './components/Bobr'



class App extends Component {
  state = {
    visibility: false,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ visibility: true })}>Bóbr</button>
          <button onClick={() => this.setState({ visibility: false })}>OdBóbr</button>

          {this.state.visibility && <Bobr />}
        </header>
      </div>
    );
  }
}

export default App;
