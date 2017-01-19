var numeralvalues = [1,5,10,50,100,500,1000];
var numeralSymbols = ["I","V","X","L","C","D","M"];
numeralSymbols.forEach(function(numeralSymbol) {
  numeralSymbols[0].replace(1);
  [1].replace(5);
});



var whatnumbers = parseInt(prompt("Enter a number"));

var numeralSymbols = function(number) {
  if (whatnumbers === 1) {
  return "I";
  } else if (whatnumbers === 5) {
  return "V";
  } else if (whatnumbers === 10) {
  return "X";
  } else if (whatnumbers === 50) {
  return "L";
  } else if (whatnumbers === 100) {
  return "C";
  } else if (whatnumbers === 500) {
  return "D";
  } else if (whatnumbers === 1000) {
  return "M";
  } else {
  return "error";
  }
};



alert("Your number is " + numeralSymbols(whatnumbers));
