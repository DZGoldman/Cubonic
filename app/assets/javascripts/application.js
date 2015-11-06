// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// // about supported directives.
  // = require jquery
  // = require jquery_ujs
  // = require_tree
  var color1="rgb(255, 255, 255)"
  var color2="rgb(173, 216, 230)"
  var color3="rgb(0, 0, 255)"
  var color4="rgb(0, 0, 0)"

  var colors=[color1, color2, color3, color4]
  var clickCounter=0;

  var encrypt= function (){
    var encryptedGrid="";
    $('.box').each(function(bullshit, box){
      colors.forEach(function(color, index){
        if($(box).css("background-color")==color  ){
          encryptedGrid+=index
        }
      })
    })
    return encryptedGrid
  };
  // "000000000000000000000000000011100000001233321000001200021000001233321000000011100000000000000000000000000000000000000000000000000000000000000000"
  var decrypt= function (string){
    var array=string.split("")

    array.forEach(function(number,index){
      $($('.box')[index]).css("background-color", colors[number])
    })
  }




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


$(document).ready(function(){
  console.log('ready for action')

  $('.box').on('click', function(e){
    console.log('you clicked me bro')
    console.log(clickCounter+=1);

    var $clickedBox=$(e.target)

    //updates box realtive to inputs
    var updateSomething= function (rowChange, colChange){
      var row=($clickedBox.attr("row")); var col=($clickedBox.attr("col"));
      var newRow=String(parseInt(row)+rowChange);
      var newCol=String(parseInt(col)+colChange)

      var $testBox=$(".box[row="+newRow+"][col="+newCol+"]" )
      if($testBox.length!=0){
          updateColor($testBox)
        }
      else{
        console.log("nope")
      }
    }
    //update a 3x3
    updateSomething(0,0)
    updateSomething(1,1)
    updateSomething(-1,-1)
    updateSomething(1,0)
    updateSomething(0,1)
    updateSomething(1,-1)
    updateSomething(-1,1)
    updateSomething(-1,0)
    updateSomething(0,-1)

  });

  //clear board
  $('#reset').on('click', function(){
    $('.box').css("background-color", color1);
    clickCounter=0;
  });

var border=false;
  $('#toggle_grid').on('click', function(){
    if (border==false){
      $('.box').css("border", "1px solid black");
      border=true
    }
    else{
      $('.box').css("border", "")
      border=false;
    }
  })

  var encryptedGrid=  $('#pattern').text()
  if(encryptedGrid){
    decrypt(encryptedGrid)}

    //for now, when submit is clicked, encrypt the puzzle and dump it in an html div
  $('#submit').on('click', function(){
    var encryptedGrid=encrypt()
    $('#new_pattern').text(encryptedGrid)
  })
});