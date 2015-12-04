//Takes in an html board, returns 144 (as of now..) character string that represents each box's color (0== no color, 1== color1, etc.)
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

//takes in an encrypted string and an empty grid, decodes string and puts corresponding colors on grid
var decrypt = function(string, board) {
var grid= board.children().children().children();
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).attr("class", sides[number])
  })
}


// var decryptMini=function (string, board) {
//   var grid = board.children().children();
//   var array = string.split("")
//
//   array.forEach(function (number,index) {
//     console.log(number);
//     // console.log('test1', board.attr('id'));
//     // console.log('test', $(grid[index]));
//     $(grid[index]).attr('background-color') = colors[number]
//
//   })
// }

var decryptMini = function(string, grid) {
  var array = string.split("")

  array.forEach(function(number, index) {
    $(grid[index]).css("background-color", colors[number])
  })
}
