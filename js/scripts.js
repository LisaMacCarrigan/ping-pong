// BUSINESS / BACK-END LOGIC
var testPingPong = function(num) {
  var lastNum = num;
  var rangeArray = [];

  // DO NOTHING TO NON-NUMERIC INPUT AND NUMBERS LESS THAN 1.
  if (num < 1 || isNaN(num)) {
    alert("Please enter a number (must be greater than 0)");
  }
  else {
    for (var count = 1; count <= lastNum; count++) {
      // NUMBERS DIVISIBLE BY 15 ARE REPLACED WITH "ping-pong".
      if (count % 15 === 0) {
        rangeArray.push("ping-pong");
        console.log("ping-pong");
      }
      // NUMBERS DIVISIBLE BY 5 ARE REPLACED WITH "pong".
      else if (count % 5 === 0) {
        rangeArray.push("pong");
        console.log("pong");
      }
      // NUMBERS DIVISIBLE BY 3 ARE REPLACED WITH "ping"
      else if (count % 3 === 0) {
        rangeArray.push("ping");
        console.log("ping");
      }
      // ALL OTHER NUMBERS THAT ARE NOT DIVISIBLE BY 3, 5, or 15 ARE RETAINED
      else {
        rangeArray.push(count);
        console.log(count);
      }
    }
    var result = rangeArray.join(", ");
    console.log(rangeArray);
    return result;
  }
}
// USER INTERFACE / FRONT-END LOGIC
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input-number").val()); // takes user input and converts to integer
    $("#result").text(""); // clears result area on screen and displays 'theResult' every time a user clicks submit
    var rangeArrayresult = testPingPong(number); // variable that grabs what the function returns
    $("#result").text(rangeArrayresult); // displays rangeArrayresult
  });
});
