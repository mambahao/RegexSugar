/**
 * @module zh/chars
 * @author Justin Hao
 */
const trim = require('../_core').trim;

/**
 * 判断字符串是否完全由中文字符组成
 * @param {string} value 待检查的字符串
 * @param {string} ext 需要排除的字符串列表, 请注意使用正则转义字符
 * @returns {boolean}
 */
function isAllChineseChars(value, ext) {
  const str = trim(value);
  if(!str) return false;

  const chars = ext || '';
  const regex = new RegExp(`^[\u4e00-\u9fa5\\s${chars}]+$`, 'g');

  return regex.test(str);
}

module.exports = { isAllChineseChars };
