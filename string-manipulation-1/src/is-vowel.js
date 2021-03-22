/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  }
  return false;
}
