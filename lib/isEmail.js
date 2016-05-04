/** @module isEmail */
const trim = require('./_core').trim;

/**
 * Check string is a email address
 *
 * @param {string} value - a string
 * @return {boolean}
 */
function isEmail(value) {
  const str = trim(value);
  if(!str) return false;

  const regex = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
  return regex.test(str);
}

module.exports = { isEmail };
