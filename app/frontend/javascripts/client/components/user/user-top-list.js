'use strict';

// lib
let React = require('react/addons');

// component
let UserTopList  = React.createClass({
  render() {
    return (
      <div className="user-top-list">
        <div className="col-sm-12">
          <div className="page-header text-muted divider">
            Up Next
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <h4>Related 1</h4>
            <a href="#"><img src="//placehold.it/400/f0f0f0" className="img-respsonsive img-circle" /></a>
          </div>
          <div className="col-sm-4 text-center">
            <h4>Related 2</h4>
            <a href="#"><img src="//placehold.it/400/f0f0f0" className="img-respsonsive img-circle" /></a>
          </div>
          <div className="col-sm-4 text-center">
            <h4>Related 3</h4>
            <a href="#"><img src="//placehold.it/400/f0f0f0" className="img-respsonsive img-circle" /></a>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = UserTopList;


