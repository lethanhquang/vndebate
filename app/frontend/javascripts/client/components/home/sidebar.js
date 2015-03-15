'use strict';

// lib
let React = require('react/addons');

// component
let Sidebar  = React.createClass({
  render() {
    return (
      <div className="column col-sm-3" id="sidebar">
          <div id='background-blur' />
          <a className="logo" href="#">
            <img src='/assets/logo.png' />
          </a>
          <ul className="nav">
              <li className="active">
                <a href="javascript:void(0);">#Categories</a>
              </li>
              <li>
                <a href="#stories">#Stories</a>
              </li>
          </ul>
      </div>
    );
  }
})

module.exports = Sidebar;

