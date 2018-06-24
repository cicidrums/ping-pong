$(document).ready(function() {

//Business Logic
var ping = function(number) {
  if ((number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
};

var pong = function(number) {
  if ((number % 5 === 0)) {
    return true;
  } else {
    return false;
  }
};

var pingPong = function(number) {
  if ((number % 15 === 0)) {
    return true;
  } else {
    return false;
  }
};


//UI Logic
  $("form#ping").submit(function(event) {
    event.preventDefault();

    var emptyArray = []
    var total = 0;
    var countTo = parseInt($("input#number").val());
    var countBy = parseInt($([result1, result2, result3]));
    var number = parseInt($("input#number").val());
    var result1 = ping(number);
    var result2 = pong(number);
    var result3 = pingPong(number);
    var countingNumber = Math.floor(countTo/countBy);

    if (result1 === true) {
    $("#result").append("Ping" + " ");
    } else {
    }

    if (result2 === true) {
    $("#result").append("Pong" + " ");
    } else {
    }

    if (result3 === true) {
    $("#result").append("Ping Pong" + " ");
    } else {
    }

    if ((result1 !== true) && (result2 !== true)) {
    alert("Keep trying!")
    }
});
});
