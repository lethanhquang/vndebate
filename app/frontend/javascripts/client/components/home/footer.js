'use strict';

// lib
let React = require('react/addons');

// component
let Footer  = React.createClass({
  render() {
    return (
      <div className='footer'>
        <div className="col-sm-12">
          <div className="page-header text-muted divider">Connect with Us</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="#"> <i className='fa fa-twitter' /> Twitter</a> <small className="text-muted">|</small>
            <a href="#"> <i className='fa fa-facebook-square' /> Facebook</a> <small className="text-muted">|</small>
            <a href="#"> <i className='fa fa-google-plus-square' /> Google+</a>
          </div>
          <div className="col-sm-6">
            <h6 className="pull-right">© 2015 vndebate.com</h6>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
})

module.exports = Footer;

