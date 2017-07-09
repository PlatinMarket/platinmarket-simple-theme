// Load jQuery
global.jQuery = global.$ = require('jquery');
// Load Tether
global.Tether = require('tether');
// Load Bootstrap
global.bt = require('bootstrap');
// Load owl.carousel
require('owl.carousel');

$(document).ready(function(){
  $('.main-banner .owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true
  });

  $('.carousel-products').owlCarousel({
    items:5,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'] ,
    dots: false
  });
});