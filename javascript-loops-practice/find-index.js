/* exported findIndex */
function findIndex(array, index) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === index) {
      return i;
    }
  }
  return -1;
}
