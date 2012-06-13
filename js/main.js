(function( $ ) {

  var $container = $('.display-width');

  function writeWinDimension() { 
    var winHeight = $(window).height();
    var winWidth = $(window).width();

    $container.html(winWidth + 'px');
  }

  function updateWinDimension( e ) { 
    writeWinDimension();
  }

  writeWinDimension();
  $(window).bind("resize", updateWinDimension);

})( jQuery );