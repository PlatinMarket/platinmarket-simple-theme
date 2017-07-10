
module.exports = function (target, options) {
  options = Object.assign({
    items: 1,
    lazyLoad: true,
    nav: false,
    mouseDrag: false,
    changeSpeed: 0
  }, options || {});

  return $(target)
    .on('initialized.owl.carousel', function(e) {
      var lastIndex = 0;
      $(e.target)
        .on('mousemove', function(mouseMoveEvent) {
          mouseMoveEvent.stopPropagation();
          const itemPosition = e.target.getBoundingClientRect();
          const offsetX = mouseMoveEvent.pageX - itemPosition.left;
          const totalWidth = e.target.clientWidth;
          if (offsetX < 0 || offsetX > totalWidth) return;
          const toIndex = Math.floor((mouseMoveEvent.pageX - itemPosition.left) / (totalWidth / (e.item.count)));
          if (lastIndex === toIndex) return;
          lastIndex = toIndex;
          e.relatedTarget.to(toIndex, options.changeSpeed);
          //$(e.target).trigger('to.owl.carousel', [toIndex, options.changeSpeed]);
        })
        .on('mouseleave', function() {
          e.relatedTarget.to(0, options.changeSpeed);
          //$(e.target).trigger('to.owl.carousel', [0, options.changeSpeed]);
          lastIndex = 0;
        });
    })
    .owlCarousel(options);
};