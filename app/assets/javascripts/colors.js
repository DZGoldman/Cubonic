var color1 = "rgb(255, 255, 255)"
var color2 = "rgb(23, 241, 208)"
var color3 = "rgb(232, 23, 23)"
var color4 = "rgb(11, 191, 31)"


var colors = [color1, color2, color3, color4]

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
      box.css("background-color", color1)
      break
  }
};

//
// $.ajax({
//         url : "/puzzles/new",
//         type : "post",
//         data : { color1: JSON.(color1) }
//     );
