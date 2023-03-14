import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import VideoBackground from './components/videobg/VideoBackground';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <VideoBackground />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
