//Rotating cube logo:
var side1 = 'show-front'
var side2 = 'show-back'
var side3 = 'show-right'
var side4 = 'show-left'
var side5 = 'show-top'
var side6 = 'show-bottom'

var sides = [side1, side2, side3, side4, side5, side6];

$(document).ready(function () {
  // set interval function to coninuously rotate cube every 1.8 seconds
    rotateCube( $('[type=logo]') );
  window.setInterval(function () {
    rotateCube( $('[type=logo]') );
  }, 1800)

})
