// Load owl.carousel
require('owl.carousel');

// Load owl carousel mousemove
const moveCarousel = require('./lib/move_carousel');

$('.main-banner .owl-carousel').owlCarousel({
  items: 1,
  lazyLoad: true,
  nav: false
});

moveCarousel('.product .owl-carousel', {
  items: 1,
  lazyLoad: true,
  nav: false,
  mouseDrag: false
});


$('.card > .carousel-products').owlCarousel({
  items:5,
  slideBy:5,
  nav:true,
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
});