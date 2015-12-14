var test="this is a test"

//clear board- clears whatever board is currently on the page, long as it isn't static
$(document).ready(function() {
  $('.reset').on('click', function() {

    cubes=$('.board').not($('#static_board')).children().children().children();
      cubes.removeClass();
      cubes.attr("class", side1);
      clickCounter = 0;
  });

  // TODO toggle grid on and off for all boards on the page
  var border = false;
  $('#toggle_grid').on('click', function() {
    if (border == false) {
      $('.box').css("border", "1px solid black");
      border = true
    } else {
      $('.box').css("border", "")
      border = false;
    }
  })

})
