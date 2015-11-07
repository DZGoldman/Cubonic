var test="this is a test"

//clear board
$('#reset').on('click', function() {
  $('.click-box').css("background-color", color1);
  clickCounter = 0;
});

//toggle grid on and off
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
