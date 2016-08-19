$(document).ready(function() {
// BUSINESS LOGIC
var testPingPong = function(num) {
  // DO NOTHING TO NON-NUMERIC INPUT AND NUMBERS LESS THAN 1.
  if (num < 1 ) {
    alert("Please enter a number (must be greater than 0)");
  }
  else {
    // NUMBERS DIVISIBLE BY 15 ARE REPLACED WITH "ping-pong".
    if (num % 15 === 0) {
      return "ping-pong";
    }
    // NUMBERS DIVISIBLE BY 5 ARE REPLACED WITH "pong".
    else if (num % 5 === 0) {
      return "pong";
    }
    // NUMBERS DIVISIBLE BY 3 ARE REPLACED WITH "ping"
    else if (num % 3 === 0) {
      return "ping";
    }
    // ALL OTHER NUMBERS THAT ARE NOT DIVISIBLE BY 3, 5, or 15 ARE RETURNED
    else {
      return num;
    }
  }
}
  // USER INTERFACE LOGIC
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input-number").val()); // takes user input and converts to integer
    $("#result").text(""); // clears result area on screen and displays 'theResult' every time a user clicks submit
    var theResult = testPingPong(number); // variable that grabs what the function returns
    $("#result").text(theResult); // displays theResult
  });
});
