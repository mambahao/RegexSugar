/** @module zh/isPhoneNumber */
const trim = require('../_core').trim;
const test = require('../_core').test;

/**
 * Check a string is a mobile phone number
 *
 * @param {string} value - a string
 * @returns {boolean}
 *
 * @description
 * ----
 * > 格式说明
 *
 * 电信
 * - 2G/3G号段 (CDMA2000 网络) 133, 153, 180, 181, 189
 * - 4G号段 177
 * - 卫星手机 1349
 *
 * 联通
 * - 2G号段（GSM 网络）130, 131, 132, 155, 156
 * - 3G上网卡 145
 * - 3G号段 (WCDMA 网络) 185, 186
 * - 4G号段 176, 185[1]
 *
 * 移动
 * - 2G号段 (GSM 网络) 134x (0-8), 135, 136, 137, 138, 139, 150, 151, 152, 158, 159, 182, 183, 184
 * - 3G号段 (TD-SCDMA 网络) 有 157, 187, 188
 * - 3G上网卡 147
 * - 4G号段 178
 *
 * ----
 */
function isMobilePhoneNumber(value) {
  const regex = /^(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/;
  return test(regex, value);
}

/**
 * Check a string is a fixed phone number
 *
 * @param {string} value - a string
 * @returns {boolean}
 *
 * @description
 * ----
 * > 格式说明
 *
 * - 区号 3-4 位, 号码 7-8 位
 * - 可以有分机号, 分机号为 3-4 位
 * - 示例: "0775-85333333-123"
 *
 * ----
 */
function isFixedPhoneNumber(value) {
  const regex = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return test(regex, value);
}

module.exports = { isFixedPhoneNumber, isMobilePhoneNumber };
