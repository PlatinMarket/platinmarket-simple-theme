import 'bootstrap';
import $ from 'jquery';
import 'owl.carousel';

// Set moment locale
moment.locale('tr');

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});