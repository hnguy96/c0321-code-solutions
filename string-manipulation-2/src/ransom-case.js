/* exported ransomCase */
// assign a new word var
// loop through string
// capitalize every even word
function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string.charAt(i).toLowerCase();
    } else {
      newStr += string.charAt(i).toUpperCase();
    }
  }
  return newStr;
}
