const assign = require('../_core.js').assign;

const chars = require('./chars');
const isIDCardNumber = require('./isIDCardNumber');
const isPhoneNumber = require('./isPhoneNumber');
const isPostcode = require('./isPostcode');

module.exports = assign({}, chars, isIDCardNumber, isPhoneNumber, isPostcode);
