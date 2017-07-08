// Load jQuery
global.jQuery = global.$ = require('jquery');
// Load Tether
global.Tether = require('tether');
// Load Bootstrap
global.bt = require('bootstrap');
// Load owl.carousel
require('owl.carousel');

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});