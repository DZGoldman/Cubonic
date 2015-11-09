//The 5 colors- these are adjustable here so long as color1 == background-color
var color1 = "rgb(255, 255, 255)"
var color2 = "rgb(23, 241, 208)"
var color3 = "rgb(232, 23, 23)"
var color4 = "rgb(11, 191, 31)"
var color5 = "rgb(249, 132, 11)"


var colors = [color1, color2, color3, color4, color5]

//bump up color, reset after color 5. To be invoked on clicked
var updateColor = function(box) {
  var currentColor = box.css("background-color")
  switch (currentColor) {
    case color1:
      box.css("background-color", color2)
      break;
    case color2:
      box.css("background-color", color3)
      break
    case color3:
      box.css("background-color", color4)
      break
    case color4:
      box.css("background-color", color5)
      break
    case color5:
      box.css("background-color", color1)
      break
  }
};
