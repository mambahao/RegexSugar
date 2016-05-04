const assign = require('./_core.js').assign;

const isEmail = require('./isEmail');
const isQQNumber = require('./isQQNumber');
const clearPunctuations = require('./clearPunctuations');

module.exports = assign({}, isEmail, isQQNumber, clearPunctuations);
