/* exported getValue */
function getValue(object, key) {
  for (var key2 in object) {
    if (object[key] === object[key2]) {
      return object[key];
    }
  }
  return undefined;
}
