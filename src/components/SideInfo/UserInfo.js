import React, { Component } from 'react';

import AppCounts from './AppCounts';

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <div className="UsernameInfo">
            <div className="UserPhoto">
                
            </div>
            <div className="username">
                <span>
                  [Username]
                </span>
            </div>
            <div className="firstlast">
                <span>
                  [Firstname]
                </span>
                <span>
                  [Lastname]
                </span>               
            </div>
        </div>
        <div className="ColoredBelow">
            <AppCounts/>
        </div>
      </div>
    );
  }
}

export default UserInfo;
