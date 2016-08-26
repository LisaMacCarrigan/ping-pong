// BUSINESS / BACK-END LOGIC
var testPingPong = function(maxValue) {
  var rangeArray = [];

  // DO NOTHING TO NON-NUMERIC INPUT AND NUMBERS LESS THAN 1.
  if (maxValue < 1 || isNaN(maxValue)) {
    alert("Please enter a number (must be greater than 0)");
  }
  else {
    for (var count = 1; count <= maxValue; count++) {
      // NUMBERS DIVISIBLE BY 15 ARE REPLACED WITH "ping-pong".
      if (count % 15 === 0) {
        rangeArray.push("PING-PONG");
      }
      // NUMBERS DIVISIBLE BY 5 ARE REPLACED WITH "pong".
      else if (count % 5 === 0) {
        rangeArray.push("pong");
      }
      // NUMBERS DIVISIBLE BY 3 ARE REPLACED WITH "ping"
      else if (count % 3 === 0) {
        rangeArray.push("ping");
      }
      // ALL OTHER NUMBERS THAT ARE NOT DIVISIBLE BY 3, 5, or 15 ARE RETAINED
      else {
        rangeArray.push(count);
      }
    }
    var result = rangeArray.join(", ");
    return result;
  }
};
// USER INTERFACE / FRONT-END LOGIC
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input-number").val()); // takes user input and converts to integer
    var rangeArrayresult = testPingPong(userInput); // variable that grabs what the function returns
    $("#result").text(rangeArrayresult); // displays rangeArrayresult
  });
});
