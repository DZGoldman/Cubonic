var side1 = 'show-front'
var side2 = 'show-back'
var side3 = 'show-right'
var side4 = 'show-left'
var side5 = 'show-top'
var side6 = 'show-bottom'

var sides = [side1, side2, side3, side4, side5, side6];

$(document).ready(function () {
    rotateCube( $('[type=logo]') );
  window.setInterval(function () {
    rotateCube( $('[type=logo]') );
  }, 1800)

// window.setInterval(function () {
// $('[type=logo]').removeClass()
// var side = sides[[Math.floor(Math.random()*sides.length)]]
// console.log(side);
// $('[type=logo]').addClass(side);
// console.log($('[type=logo]'));
//
// }, 1850)

})
