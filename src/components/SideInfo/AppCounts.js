import React, { Component } from 'react';

class AppCounts extends Component {
  render() {
    return (
      <div className="AppCounts">
        <ul className="counts">
            <li>
                <div className = "CountIcon">

                </div>
                <span>Count 1</span>
            </li>
            <li>
                <div className = "CountIcon">

                </div>
                <span>Count 2</span>
            </li>
            <li>
                <div className = "CountIcon">

                </div>
                <span>Count 3</span>
            </li>
        </ul>
      </div>
    );
  }
}

export default AppCounts;