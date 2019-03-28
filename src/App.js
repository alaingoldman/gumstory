import React, { Component } from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';

function initializeReactGA() {
  ReactGA.initialize('UA-137229156-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  componentDidMount(){
    initializeReactGA()
  }
  render() {
    return (
      <div className="App">
        <h2> some page here </h2>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
