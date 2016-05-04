/**
 * @module zh/isPostcode
 * @author Justin Hao
 */
const trim = require('../_core').trim;

/**
 * Check a string is a postcode
 *
 * @param {string} value - a string
 * @returns {boolean}
 *
 * @description
 * ----
 * > 格式说明
 *
 * - 大陆地区邮编为 0-8 开头的 6 位数字
 * - 港澳台地区为 999 开头的 6 位数字
 *
 * ----
 */
function isPostcode(value) {
  const str = trim(value);
  if(!str) return false;

  const regex = /^([0-8]\d{5}|999\d{3})$/g;
  return regex.test(value);
}

module.exports = { isPostcode };
