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
    decrypt(encryptedGrid,$('.static-box'))
  }


  //  edit
  var encryptedGrid = $('#pattern').text()
  if (encryptedGrid) {
    decrypt(encryptedGrid, $('.edit-box') )
  }



  $('.click-box').on('click', function(e) {
    console.log('you clicked me bro')


    var $clickedBox = $(e.target)

    //finds box realtive to inputs- t
    var findBox = function(rowChange, colChange) {
        var row = ($clickedBox.attr("row"));
        var col = ($clickedBox.attr("col"));
        var newRow = String(parseInt(row) + rowChange);
        var newCol = String(parseInt(col) + colChange)

        return $(".click-box[row=" + newRow + "][col=" + newCol + "]")
      }
      //get the 3x3
    var threeByThree=[findBox(0, 0), findBox(1, 1), findBox(-1, -1), findBox(1, 0), findBox(0, 1), findBox(1, -1), findBox(-1, 1), findBox(-1, 0), findBox(0, -1)];

      //unless any are empty, update the colors
      var noneEmpty=
      threeByThree.forEach(function(box){
        if(box.length==0){
          return false
            }
            return true
          })
      if(noneEmpty){
        threeByThree.forEach(function(box){
          updateColor(box)
          console.log(clickCounter += 1);
        })

      }


    //check win
    if (encrypt() == encryptStatic()) {
      console.log("WIN!")

      $('#win').css("display", "inherit")


    } else {
      console.log("you didn't win yet")
    }

    //for creat new and edit: after each click, update form with encrypted string and number of clicks
    var encryptedGrid = encrypt()
    $('#puzzle_pattern').text(encryptedGrid)
    $('#puzzle_clicks_created').text(clickCounter)
  });



});
