/* exported setValue */
function setValue(object, key, value) {
  object[key] = value;
  if (Object.keys(object).length !== 0) {
    return object;
  }
  return undefined;
}
