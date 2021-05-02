/* exported capitalizeWords */

// split each word into an array
// capitalize first letter of each word
// join the array
function capitalizeWords(string) {
  const wordsArr = string.toLowerCase().split(' ');
  let capWords = '';
  for (let i = 0; i < wordsArr.length; i++) {
    capWords += wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1, wordsArr[i].length);
    if (i !== (wordsArr.length - 1)) {
      capWords += ' ';
    }
  }
  return capWords;
}
