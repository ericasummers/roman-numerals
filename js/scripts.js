$(document).ready(function() {
  $("form#roman-numbers").submit(function(event) {
    event.preventDefault();
    var numberinput = parseInt($("input#number").val());
    var thoustotal = function(athousand) {
    	var thousands = parseInt(numberinput / 1000);
      if (thousands === 0) {
        return "";
      } else {
        return Array(thousands + 1).join("M");
      }
     };

    var hundtotal = function(ahundred) {
    	var thousands = parseInt(numberinput / 1000);
      var hundreds = parseInt((numberinput - (thousands * 1000)) / 100);
      if (hundreds === 9) {
        return "CM";
      } else if (hundreds >= 5) {
        return "D" + Array(hundreds - 4).join("C");
      } else if (hundreds === 4) {
        return "CD";
      } else if (hundreds < 4 && hundreds > 0) {
      	return Array(hundreds + 1).join("C");
      } else {
        return "";
      }
      };

     var tentotal = function(aten) {
     var thousands = parseInt(numberinput / 1000);
      var hundreds = parseInt((numberinput - (thousands * 1000)) / 100);
      var tens = parseInt((numberinput - ((thousands * 1000) + (hundreds * 100))) / 10);
      if (tens === 9) {
        return "XC";
      } else if (tens >= 5) {
        return "L" + Array(tens - 4).join("X");
      } else if (tens === 4) {
        return "XL";
      } else if (tens < 4 && tens > 0) {
      return Array(tens + 1).join("X");
      } else {
        return "";
      }
     };

     var onetotal = function(aone) {
     var thousands = parseInt(numberinput / 1000);
      var hundreds = parseInt((numberinput - (thousands * 1000)) / 100);
      var tens = parseInt((numberinput - ((thousands * 1000) + (hundreds * 100))) / 10);
      var ones = parseInt(numberinput - ((thousands * 1000) + (hundreds * 100) + (tens * 10)))
      if (ones === 9) {
        return "IX";
      } else if (ones >= 5) {
        return "V" + Array(ones - 4).join("I");
      } else if (ones === 4) {
        return "IV";
      } else if (ones < 4 && ones > 0) {
      return Array(ones + 1).join("I");
      } else {
        return "";
      }
     };


    var result = (thoustotal(numberinput) + hundtotal(numberinput) + tentotal(numberinput) + onetotal(numberinput));

    $(".number").text("numberinput");
    $(".numeral").text("result");

    $("#answer").show();
  });
});
