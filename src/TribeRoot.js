import React, { Component } from 'react';
import './App.css';

import TopCover from './components/TopCover/TopCover';
import AppContent from './components/AppContent'
import SideInfo from './components/SideInfo/SideInfo'
import UserTribes from './components/StreamView/UserTribes'

class TribeRoot extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      tribes:[],
      hasLoaded:false
    }
  }

  componentDidMount(){
    let cont = this;
    //Load our user.
    fetch("http://www.squidswap.com:4000/user/TomBigDickBomb").then(result => {
      return result.json();
    }).then(data => {
      this.setState({
        user:data[0],
        hasLoaded:true
      });
    });
  }

  render() {
    if(this.state.hasLoaded){
      return (
        <div className="TribeRoot">
          <TopCover/>
          <SideInfo user={this.state.user}/>
          <UserTribes userId={this.state.user._id}/>
        </div>
      );
    }else{
      return(
        <div className="TribeLoading">
          Loading...
        </div>
      )
    }
  }
}

export default TribeRoot;
