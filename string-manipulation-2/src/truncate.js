/* exported truncate */
function truncate(length, string) {
  var truncateStr = string.slice(0, length);
  return truncateStr + '...';
}
