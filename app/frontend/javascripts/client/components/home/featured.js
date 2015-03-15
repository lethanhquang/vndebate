'use strict';

// lib
let React = require('react/addons');

// components
let PostList = require('../post/post-list');

// component
let Featured  = React.createClass({
  render() {
    return (
      <div className="featured">
        <div className="col-sm-12" id="featured">
          <div className="page-header text-muted">Featured</div>
        </div>
        <PostList amount={2} />
      </div>
    );
  }
})

module.exports = Featured;


