/** @module zh/isIDCardNumber */
const test = require('../_core').test;

/**
 * Check a string is a Chinese ID card number
 *
 * @param {string} value - a string
 * @returns {boolean}
 *
 * @description
 * ----
 * > 格式说明
 *
 * - 15 位或 18 位
 * - 1~6 位为地区代码
 * - 7~14 位为出生年月日
 * - 15~17 位为顺序号，是县、区级政府所辖派出所的分配码
 * - 18 位为效验位
 *
 * ----
 */
function isIDCardNumber(value) {
  const regex = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/;
  return test(regex, value);
}

module.exports = { isIDCardNumber };
