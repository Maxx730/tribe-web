import React, { Component } from 'react';
import './App.css';

import TopCover from './components/TopCover/TopCover';
import AppContent from './components/AppContent'
import SideInfo from './components/SideInfo/SideInfo'

class TribeRoot extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //Load our user.
    fetch("http://www.squidswap.com:4000/user/LootSeb").then(results =>{
      return results.json();
    }).then(data => {
      console.log(data);
    });
  }

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
