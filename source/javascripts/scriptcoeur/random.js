
// random.js [0.0.1] / makes code cleaner. Calculates inclusively.
function getRandom(high, low = 0) {
  return Math.floor(Math.random() * high) + low;
}