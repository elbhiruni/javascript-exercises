const ftoc = function(f) {
  const c = (f - 32) * (5 / 9);
  const result = Math.round(c * 10) / 10;
  return result;
};

const ctof = function(c) {
  const f = (c * (9 / 5)) + 32;
  const result = Math.round(f * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
