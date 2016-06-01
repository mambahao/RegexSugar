/** @module isQQNumber */
const test = require('./_core').test;

/**
 * Check a string is a QQ number
 *
 * @param {string} value - a string
 * @returns {boolean}
 *
 * @description
 * ----
 * > 格式说明
 *
 * - 1-9 开头, 最少 5 位
 *
 * ----
 */
function isQQNumber(value) {
  const regex = /^[1-9][0-9]{4,}$/;
  return test(regex, value);
}

module.exports = { isQQNumber };
