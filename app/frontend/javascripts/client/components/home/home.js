'use strict';

// lib
let React = require('react/addons');

// components
let Sidebar     = require('./sidebar');
let Footer      = require('./footer');
let Featured    = require('./featured');
let UserTopList = require('../user/user-top-list');

// component
let Home  = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <div className="row">
              <Sidebar />
              <div className="column col-sm-9" id="main">
                <div className="padding">
                  <div className="full col-sm-9">
                    <Featured />
                    <UserTopList />
                    <Footer />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Home;
