//uses all of the other js files:

$(document).ready(function() {
  console.log('ready for action')

  var clickCounter = 0;
  //for show, grab grid from the hidden div and decrypt it, ie put it on the board
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid)
  }


  $('.click-box').on('click', function(e) {
    console.log('you clicked me bro')
    console.log(clickCounter += 1);

    var $clickedBox = $(e.target)

    //updates box realtive to inputs
    var updateSomething = function(rowChange, colChange) {
        var row = ($clickedBox.attr("row"));
        var col = ($clickedBox.attr("col"));
        var newRow = String(parseInt(row) + rowChange);
        var newCol = String(parseInt(col) + colChange)

        var $testBox = $(".click-box[row=" + newRow + "][col=" + newCol + "]")
        if ($testBox.length != 0) {
          updateColor($testBox)
        } else {
          console.log("nope")
        }
      }
      //update a 3x3
    updateSomething(0, 0)
    updateSomething(1, 1)
    updateSomething(-1, -1)
    updateSomething(1, 0)
    updateSomething(0, 1)
    updateSomething(1, -1)
    updateSomething(-1, 1)
    updateSomething(-1, 0)
    updateSomething(0, -1)

    //check win
    if (encrypt() == encryptStatic()) {
      console.log("WIN!")

      //crazy shit:


    } else {
      console.log("you didn't win yet")
    }

    //for creat new: after each click, update form with encrypted string and number of clicks
    var encryptedGrid = encrypt()
    $('#puzzle_pattern').text(encryptedGrid)
    $('#puzzle_clicks_created').text(clickCounter)
  });



});
