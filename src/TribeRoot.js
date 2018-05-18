import React, { Component } from 'react';
import './App.css';

import TopCover from './components/TopCover/TopCover';
import AppContent from './components/AppContent'
import SideInfo from './components/SideInfo/SideInfo'

class TribeRoot extends Component {
  render() {
    return (
      <div className="TribeRoot">
        <TopCover/>
        <SideInfo/>
      </div>
    );
  }
}

export default TribeRoot;
