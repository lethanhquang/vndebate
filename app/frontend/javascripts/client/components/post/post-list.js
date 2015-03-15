'use strict';

// lib
let React = require('react/addons');

// components
let PostListItem = require('./post-list-item');

// component
let PostList  = React.createClass({

  mixins: [React.addons.PuredRenderMixin],

  render() {
    let posts = [];

    for (let i=0; i< this.props.amount; i++) {
      posts.push(<PostListItem key={i} />);
    }

    return (
      <div className="post-list">
        {posts}
      </div>
    );
  }
})

module.exports = PostList;


