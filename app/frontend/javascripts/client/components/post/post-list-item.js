'use strict';

// lib
let React = require('react/addons');

// component
let PostListItem  = React.createClass({
  mixins: [React.addons.PuredRenderMixin],

  render() {
    return (
      <div className="row post-list-item">
        <div className="col-sm-10">
          <h3>This is Some Awesome Featured Content</h3>
          <h4>
            <span className="label label-default">techvisually.com</span>
          </h4>
          <h4>
            <small className="text-muted">1 hour ago • <a href="#" className="text-muted">Read More</a></small>
          </h4>
        </div>
          <div className="col-sm-2">
            <a href="#" className="pull-right">
              <img src="http://lorempixel.com/100/100/people" className="img-circle" />
            </a>
          </div>
      </div>
    );
  }
})

module.exports = PostListItem;


