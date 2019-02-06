import React, { Component } from 'react';
import WaveSurfer from './components/Wavesurfer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <WaveSurfer/>
      </div>
    );
  }
}

export default App;
