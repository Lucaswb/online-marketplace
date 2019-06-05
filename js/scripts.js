$(document).ready(function() {
  $("form#add").submit(function(event) {
      event.preventDefault();
      var person1 = ($("#person1").val());
      var address1 = ($("#address1").val());

      var number1 = (10*parseInt($("#add1").val()));
      var number2 = (20*parseInt($("#add2").val()));
      var number3 = (30*parseInt($("#add3").val()));
      var theSum = number1 + number2 + number3;
      var result = theSum

      $("#output1").text(theSum);
      $("#output2").text(person1);
      $("#output3").text(address1);



  // $("#blanks form").submit(function() {

  //   alert(person1, address1)
});
});




    // blanks.forEach(function(blank) {
    //   var userInput = $("input." + blank).val();
    //   $("." + blank).text(userInput).val();
