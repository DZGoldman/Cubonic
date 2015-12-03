//The 5 colors- these are adjustable here so long as color1 == background-color
var side1 = 'show-front'
var side2 = 'show-back'
var side3 = 'show-right'
var side4 = 'show-left'
var side5 = 'show-top'
var side6 = 'show-bottom'


var sides = [side1, side2, side3, side4, side5, side6]

//bump up color, reset after color 5. To be invoked on clicked
var rotateCube = function(cube) {
  var currentSide = cube.attr('class')
  // if (!currentSide) {
  //     currentSide = side1;
  // }

  console.log(currentSide);
  //get rid of current side status
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
