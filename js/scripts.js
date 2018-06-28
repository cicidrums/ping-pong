

//Business Logic
var emptyArray = [];
var numArray = [];
var bizLogic = function(number) {
  for (index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
    emptyArray.push(index);
    numArray.push("Ping Pong" + " ");
    result = ("Ping Pong" + " ");
  } else if (index % 5 === 0) {
    emptyArray.push(index);
    numArray.push("Pong" + " ");
    result = ("Pong" + " ");
  } else if (index % 3 === 0) {
    emptyArray.push(index);
    numArray.push("Ping" + " ");
    result = ("Ping" + " ");
  } else {
    emptyArray.push(index);
    numArray.push(index);
    result = index;
  }
  $("#result").append("<li>" + result + "</li>");
  }
}

//UI Logic
$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    /*numArray.forEach(function(number){
    $("#result").append("<li>" + number + "</li>") });*/

    //callback function
    $("#result").empty();
    bizLogic(number);


//numArray.forEach(function(inputFromArray){ $("#result").append("<li>" + inputFromArray + "</li>") });
  });
});
