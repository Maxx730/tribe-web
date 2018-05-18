import React, { Component } from 'react';

import AppCounts from './AppCounts';

class UserInfo extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.user)
  }

  render() {
    return (
      <div className="UserInfo">
        <div className="UsernameInfo">
            <div className="UserPhoto">
                
            </div>
            <div className="username">
                <span>
                  {this.props.user.username}
                </span>
            </div>
            <div className="firstlast">
                <span className="first">
                  {this.props.user.firstname}
                </span>
                <span className="last">
                  {this.props.user.lastname}
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
