
var encrypt = function($board) {
  var encryptedGrid = "";
  $board.children().children().each(function(bullshit, box) {
    colors.forEach(function(color, index) {
      if ($(box).css("background-color") == color) {
        encryptedGrid += index
      }
    })
  })
  return encryptedGrid
};


var decrypt = function(string, grid) {
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).css("background-color", colors[number])
  })
}
