  

// for drawing grids for _grid-markers


$(document).ready(function() {

  var mainWidth = parseInt($('._grid-markers-basis').css( "width" )) - parseInt($('._grid-markers-basis').css( "padding-right" )) - parseInt($('._grid-markers-basis').css( "padding-left" ));
  var cols = $('._grid-markers').data('cols');
  // console.log('grid marker width: ', mainWidth, ' cols', cols, $('._grid-markers').innerWidth());

  var emptyDivs = '';
  for(i=0; i<cols; i++) {
    emptyDivs += '<div></div>'; // create empty divs for markers
  }

  $('._grid-markers')
    .html(emptyDivs)
    .width(mainWidth)
    .addClass('_span-col-'+cols)
    .css({
      'grid-template-columns': 'repeat('+cols+', 1fr)',
      'margin-left': $('._grid-markers-basis').css( "padding-left" ),
      'margin-right': $('._grid-markers-basis').css( "padding-right" ),
    });
    
});