
//Takes in an html board, returns 144 (as of now..) character string that represents each box's color (0== no color, 1== color1, etc.)
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

//takes in an encrypted string and an empty grid, decodes string and puts corresponding colors on grid
var decrypt = function(string, grid) {
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).css("background-color", colors[number])
  })
}
