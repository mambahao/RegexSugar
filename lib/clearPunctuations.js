/** @module clearPunctuations */
const remove = require('./_core').remove;

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
  const all = '[\\\\!"#\\[\\]\\$%&\\\'\\(\\)\\{\\}=\\-\\/~\\^\\|\\*:\\+;_。，！？、；“”‘’～－─…｀·：【】〔〕［］﹏＄＾＋＝｜（）＜＞￥×《》「」]';

  const regex = new RegExp(exclude ? all.replace(exclude, '') : all, 'g');
  return remove(value, regex);
}

module.exports = { clearPunctuations };
