console.log('ready for action')

var color1="rgb(255, 255, 255)"
var color2="rgb(173, 216, 230)"
var color3="rgb(0, 0, 255)"
var color4="rgb(0, 0, 0)"

var updateColor= function(box){
  var currentColor= box.css("background-color")
  switch (currentColor){
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




$('.box').on('click', function(e){
  console.log('you clicked me bro')

  var $clickedBox=$(e.target)
  updateColor($clickedBox)
  var updateSomething= function (rowChange, colChange){
  var row=($clickedBox.attr("row")); var col=($clickedBox.attr("col"));

  var newRow=String(parseInt(row)+rowChange);
  var newCol=String(parseInt(col)+colChange)

  var $testBox=$(".box[row="+newRow+"][col="+newCol+"]" )
  updateColor($testBox)
}

  updateSomething(1,1)
  updateSomething(-1,-1)
  updateSomething(1,0)
  updateSomething(0,1)
  updateSomething(1,-1)
  updateSomething(-1,1)
  updateSomething(-1,0)
  updateSomething(0,-1)
})


  $( "#board" ).toggle( "fold")
