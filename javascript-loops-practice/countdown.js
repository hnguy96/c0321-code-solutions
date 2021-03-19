/* exported countdown */
function countdown(number) {
  var numberArray = [];
  for (number; number >= 0; number--) {
    numberArray.push(number);
  }
  return numberArray;
}
