'use strict'

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');
require('babel/polyfill');


let $      = require('jquery');
let React  = require('react/addons');

// components
let UsersFixedTable = require('./admin/components/users-fixed-table');

// ------------------------------
// =DOM Ready
// ------------------------------
$(document).ready(function () {

  // Resize sidbar
  Utility.sidebar_resizing();

  // Sidebar Accordion
  $('body').sidebarAccordion();

  // Full Height Panel
  if ($('.full-height-content')) {
    $('body').fullHeightPanel();
  }

});

// ------------------------------
// DOM Loaded
// ------------------------------
$(window).bind("load", function() {
  $(window).trigger('resize');
});

$(window).scroll(function(){
  Utility.sidebar_resizing();
});

$(window).resize(function(){
  Utility.resizePageHeight();
  Utility.autocollapse();
  Utility.sidebar_resizing();

  // Hide loading layer
  $('.animsition-loading').fadeOut( ()=> $(this).remove());
});
