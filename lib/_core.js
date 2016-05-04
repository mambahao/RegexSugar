/* eslint strict:0 */
/* eslint prefer-rest-params:0 */
/* eslint no-restricted-syntax: ["error", "WithStatement"] */

'use strict';

function trim(value) {
  if(!value) return undefined;

  let str = value.replace(/^\s+/, '');
  for(let i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return str;
}

const assign = typeof Object.assign === 'function' ? Object.assign : function(target) {
  if (target === undefined || target === null) throw new TypeError('Cannot convert undefined or null to object');

  const output = Object(target);
  for(let index = 1; index < arguments.length; index++) {
    const source = arguments[index];
    if(source !== undefined && source !== null) {
      for(const nextKey in source) {
        if(source.hasOwnProperty(nextKey)) output[nextKey] = source[nextKey];
      }
    }
  }

  return output;
};

module.exports = { trim, assign };
