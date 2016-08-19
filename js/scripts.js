$(document).ready(function() {
// BUSINESS LOGIC
  var testPingPong = function(num) {


  // Do nothing to non-numeric input (i.e. letters and special characters) Form-control
  // Do nothing to 0
  if (num < 1 ) {
    alert("Please enter a number (must be greater than 0)");
  }
  else {
    alert("This number passes");
    return num;

    // Numbers divisible by 3 are replaced with "ping"

    // Numbers divisible by 5 are replaced with "pong".

    // Numbers divisible by 15 are replaced with "ping-pong".

  }


}
  // USER INTERFACE LOGIC
  $("#user-input").submit(function(event) {
    event.preventDefault();
    // take user input and change to integer
    var number = parseInt($("#input-number").val());
    $("#result").text("");
    var theResult = testPingPong(number);
    $("#result").text(theResult);

  })
});
