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
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  responsiveClass:true,
  responsive:{
    0:{
      nav:false,
      items:1,
      slideBy:1
    },
    600:{
      nav:false,
      items:3,
      slideBy:3
    },
    1000:{
      nav:true,
      items:5,
      slideBy:5
    }
  }
});