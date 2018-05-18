import React, { Component } from 'react';

import AppTitle from './AppTitle'
import TopNavigaiton from './TopNavigation'

class TopCover extends Component {
  render() {
    return (
      <div className="TopCover">
        <TopNavigaiton/>
        <AppTitle/>
      </div>
    );
  }
}

export default TopCover;
