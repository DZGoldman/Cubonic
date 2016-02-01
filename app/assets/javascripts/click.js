// add click events to all "clickable" boards
$(document).ready(function() {
  console.log('ready for action')

  //I use a global variable. Sue me.
  startingClicks = $('#starting_clicks').text()
  clickCounter = +startingClicks;

  //for show, grab grid from the hidden div and decrypt it, ie put it on the board
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid, $('#static_board'))
  }

  //  same thing for edit
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid, $('#edit_board'))
  }

  //click events for boards that target each cell - rotate appopriate cubes on click
  $('#click_board, #edit_board, #new_board').click(function(e) {
    var clickedBox = (e.toElement).parentNode.parentNode;
    $clickedBox = $(clickedBox)

    //finds box realtive to inputs (example: findBox(2,-1) will return the box 2 to the right and 1 down from the clicked box )
    var findBox = function(rowChange, colChange) {
        var row = ($clickedBox.attr("row"));
        var col = ($clickedBox.attr("col"));
        var newRow = String(parseInt(row) + rowChange);
        var newCol = String(parseInt(col) + colChange)
        return $(".box[row=" + newRow + "][col=" + newCol + "]")[0]
      }

      //get the 3x3 around the click
    var threeByThree = [findBox(0, 0), findBox(1, 1), findBox(-1, -1), findBox(1, 0), findBox(0, 1), findBox(1, -1), findBox(-1, 1), findBox(-1, 0), findBox(0, -1)];
    //unless any are empty, update the colors...and yes, I am currrently using an error message to help me. Gonna go ahead and assume that this is bad practice...
    threeByThree.forEach(function(box) {
      box.length
    })
    threeByThree.forEach(function(box) {
      box = $(box).children()
      rotateCube(box)
    })

    //check win- see if current grid (encryped) matches solution. Do this on each click
    if (encrypt($('#click_board')) == encrypt($('#static_board'))) {
      $('#win').css("display", "inherit")
    }

    //for creat new and edit: after each click, update hidden form with encrypted string and number of clicks
    var encryptedGrid = encrypt($('#edit_board, #new_board'))
    $('#puzzle_pattern').text(encryptedGrid)
    $('#puzzle_clicks_created').text(clickCounter)
  });

});
