$(document).ready(function() {

//Business Logic
var emptyArray = [];
var numArray = [];

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

    var total = 0;
    var number = parseInt($("input#number").val());

    for (index = 1; index <= number; index += 1) {
    if (index % 3 === 0) {
      emptyArray.push("Ping");
      numArray.push("Ping" + " ");
      result = ("Ping" + " ");
    } else if (index % 5 === 0) {
      emptyArray.push(index);
      numArray.push("Pong" + " ");
      result = ("Pong" + " ");
    } else if (index % 15 === 0) {
      emptyArray.push(index);
      numArray.push("Ping Pong" + " ");
      result = ("Ping Pong" + " ");
    } else {
      emptyArray.push(index);
      numArray.push(index);
      result = index;
    }
    $("#result").append(index + " ");
    console.log(numArray);
    }
});
});
