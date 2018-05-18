import React, { Component } from 'react';

class TopNavigation extends Component {
  render() {
    return (
      <div className="TopNavigation">
        <div className="NavigationItems">
            <ul>
                <li>
                    Tribes
                </li>
                <li>
                    Events
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default TopNavigation;