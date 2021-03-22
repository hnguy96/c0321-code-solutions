/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i].toString() + suffix.toString();
    newArray.push(newWord);
  }
  return newArray;
}
