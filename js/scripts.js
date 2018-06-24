$(document).ready(function() {

//Business Logic
var ping = function(number) {
  if ((number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
};
//|| (number % 5 === 0) || (number % 15 ===0))//

var pong = function(number) {
  if ((number % 5 === 0)) {
    return true;
  } else {
    return false;
  }
};


//UI Logic

  $("form#ping").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result1 = ping(number);
    var result2 = pong(number);

    if (result1 === true) {
      $("#result").append("Ping");
    } else {
    }

    if (result2 === true) {
      $("#result").append("Pong");
    } else {
    }

  });
});
