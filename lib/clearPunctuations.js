/** @module clearPunctuations */
const trim = require('./_core').trim;

/**
 * Clear punctuations
 * @param {string} value - a string
 * @param {regexp} exclude - exclude chars
 *
 * @returns {string} cleared string
 *
 * @example
 * clearPunctuations('[bookname]-gitbook', /[_\-]/g);
 * // return bookname-gitbook
 *
 * @description
 * ----
 * > 默认清除的字符如下
 *
 * - 英文: !"#$%&\'(){}=-/~^|*:+;_
 * - 中文: 。，！？、；“”‘’～－─…｀·：【】〔〕［］﹏＄＾＋＝｜（）＜＞￥×《》「」
 *
 * ----
 */
function clearPunctuations(value, exclude) {
  const str = trim(value);
  if(!str) return value;

  const all = '[\\\\!"#\\[\\]\\$%&\\\'\\(\\)\\{\\}=\\-\\/~\\^\\|\\*:\\+;_。，！？、；“”‘’～－─…｀·：【】〔〕［］﹏＄＾＋＝｜（）＜＞￥×《》「」]';

  const regex = new RegExp(exclude ? all.replace(exclude, '') : all, 'g');
  return str.replace(regex, '');
}

module.exports = { clearPunctuations };
