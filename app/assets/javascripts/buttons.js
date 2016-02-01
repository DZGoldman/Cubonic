
//clear board- clears whichever board is currently on the page, long as it isn't static (which can't be cleared)
$(document).ready(function() {
  $('.reset').on('click', function() {
    cubes=$('.board').not($('#static_board')).children().children().children();
      cubes.removeClass();
      cubes.attr("class", side1);
      clickCounter = 0;
  });
})
