//Takes in an html board, returns 81 character string that represents each box's color (0== side 0, 1==side1, etc.)
var encrypt = function($board) {
  var encryptedGrid = "";
  $board.children().children().children().each(function(bullshit, box) {
    sides.forEach(function(side, index) {
      if ($(box).attr("class") == side) {
        encryptedGrid += index
      }
    })
  })
  return encryptedGrid
};

//takes in an encrypted string and an empty grid, decodes string and puts corresponding cude sides on grid
var decrypt = function(string, board) {
var grid= board.children().children().children();
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).attr("class", sides[number])
  })
}

//takes in an encrypted string and an empty minigrid, decodes string and puts corresponding color on grid
var decryptMini = function(string, grid) {
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).css("background-color", colors[number])
  })
}
