
var encrypt = function() {
  var encryptedGrid = "";
  $('.click-box').each(function(bullshit, box) {
    colors.forEach(function(color, index) {
      if ($(box).css("background-color") == color) {
        encryptedGrid += index
      }
    })
  })
  return encryptedGrid
};

var encryptStatic = function() {
  var encryptedGrid = "";
  $('.static-box').each(function(bullshit, box) {
    colors.forEach(function(color, index) {
      if ($(box).css("background-color") == color) {
        encryptedGrid += index
      }
    })
  })
  return encryptedGrid
};

var decrypt = function(string) {
  var array = string.split("")

  array.forEach(function(number, index) {
    $($('.static-box')[index]).css("background-color", colors[number])
  })
}
