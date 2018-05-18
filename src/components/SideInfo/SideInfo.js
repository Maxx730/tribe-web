import React, { Component } from 'react';

import UserInfo from './UserInfo';
import UserMenu from './UserMenu';

class SideInfo extends Component {
  render() {
    return (
      <div className="SideInfo">
        <UserInfo user={this.props.user}/>
        <UserMenu/>
      </div>
    );
  }
}

export default SideInfo;
