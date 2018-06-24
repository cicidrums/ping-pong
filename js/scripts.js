$(document).ready(function() {

//Business Logic
var bizLogic = function(number) {
  if ((number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
};


//UI Logic

  $("form#ping").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = bizLogic(number);

    if (result === true) {
      $("#result").text("Yes!");
    } else {
      $(".result").text("NOPE!");
    }
    console.log(result);
  });
});
