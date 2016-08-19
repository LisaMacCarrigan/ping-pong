$(document).ready(function() {
// BUSINESS LOGIC
var testPingPong = function(num) {
  // var variableName would be defined here

  // Do nothing to non-numeric input (i.e. letters and special characters) Form-control
  // Do nothing to 0
  if (num < 1 ) {
    alert("Please enter a number (must be greater than 0)");
  }
  else {
    // NUMBERS DIVISIBLE BY 3 ARE REPLACED WITH "ping"
    if (num % 3 === 0) {
      return "ping";
    }
    else {
      return num;
    }
    // NUMBERS DIVISIBLE BY 5 ARE REPLACED WITH "pong".
    // NUMBERS DIVISIBLE BY 15 ARE REPLACED WITH "ping-pong".

    // ALL OTHER NUMBERS THAT ARE NOT DIVISIBLE BY 3, 5, or 15 ARE RETURNED
    // console.log(num);
    // return num;
  }

}
  // USER INTERFACE LOGIC
  $("#user-input").submit(function(event) {
    event.preventDefault();
    // take user input and convert to integer
    var number = parseInt($("#input-number").val());
    $("#result").text("");
    var theResult = testPingPong(number);
    $("#result").text(theResult);

  })
});
