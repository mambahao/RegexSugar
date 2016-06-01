/** @module isEmail */
const test = require('./_core').test;

/**
 * Check string is a email address
 *
 * @param {string} value - a string
 * @return {boolean}
 */
function isEmail(value) {
  const regex = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
  return test(regex, value);
}

module.exports = { isEmail };
