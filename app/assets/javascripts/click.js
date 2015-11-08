//uses all of the other js files:

$(document).ready(function() {
  console.log('ready for action')

  //I used a global variable. Sue me.
  //(for edit)
  startingClicks=$('#starting_clicks').text()
  clickCounter = +startingClicks;

  //for show, grab grid from the hidden div and decrypt it, ie put it on the board
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid, $('#static-board').children().children() )
  }


  //  edit
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid, $('#edit-board').children().children() )
  }



  $('#click-board, #edit-board, #new-board').children().children().on('click', function(e) {
    console.log('you clicked me bro')


    var $clickedBox = $(e.target)

    //finds box realtive to inputs- t
    var findBox = function(rowChange, colChange) {
        var row = ($clickedBox.attr("row"));
        var col = ($clickedBox.attr("col"));
        var newRow = String(parseInt(row) + rowChange);
        var newCol = String(parseInt(col) + colChange)

        return $(".box[row=" + newRow + "][col=" + newCol + "]")[0]
      }

      //get the 3x3
    var threeByThree=[findBox(0, 0), findBox(1, 1), findBox(-1, -1), findBox(1, 0), findBox(0, 1), findBox(1, -1), findBox(-1, 1), findBox(-1, 0), findBox(0, -1)];

      //unless any are empty, update the colors...and yes, I am using an error message to help me. Gonna go ahead and assume that this is bad practice...
      threeByThree.forEach(function(box){
        box.length
          })

        console.log(clickCounter += 1);
        threeByThree.forEach(function(box){
          updateColor($(box))

        })


    //check win
    if (encrypt($('#click-board')) == encrypt( $('#static-board')) ) {
      console.log("WIN!")

      $('#win').css("display", "inherit")


    } else {
      console.log("you didn't win yet")
    }

    //for creat new and edit: after each click, update form with encrypted string and number of clicks
    var encryptedGrid = encrypt( $('#edit-board, #new-board') )
    $('#puzzle_pattern').text(encryptedGrid)
    $('#puzzle_clicks_created').text(clickCounter)
  });



});
