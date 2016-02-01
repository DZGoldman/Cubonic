//define side classes:
var side1 = 'show-front'
var side2 = 'show-back'
var side3 = 'show-right'
var side4 = 'show-left'
var side5 = 'show-top'
var side6 = 'show-bottom'

var sides = [side1, side2, side3, side4, side5, side6];

//The 5 colors- these are adjustable here so long as color1 == background-color
var color1 = "rgb(8, 101, 61)"
var color2 = "rgb(23, 241, 208)"
var color3 = "rgb(232, 23, 23)"
var color4 = "rgb(11, 191, 31)"
var color5 = "rgb(249, 132, 11)"
var color6 = "rgb(126, 2, 240)"

var colors =[color1,color2,color3,color4,color5,color6]

//bump up color, reset after color 5. To be invoked on click
var rotateCube = function(cube) {
  var currentSide = cube.attr('class')
  cube.removeClass();
  switch (currentSide) {
    case side1:
      cube.addClass(side2)
      break;
    case side2:
      cube.addClass(side3)
      break
    case side3:
      cube.addClass(side4)
      break
    case side4:
      cube.addClass(side5)
      break
    case side5:
      cube.addClass(side6)
      break
      case side6:
      cube.addClass(side1)
      break
  }
};

//TODO: outer perimeter (non-clickable) turns red on hover. Not working right now b/c of css transforms on cube
// $('[row=1]').mouseover(function () {
// $('[row=1]').attr('background-color', 'red')
// })
