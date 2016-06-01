const should = require('should');
const isQQNumber = require('../lib').isQQNumber;

/**
 * 1-9 开头, 最少 5 位
 */
describe('isQQNumber', () => {
  const numbers = ['56786543', '55555', '1234567890', '12345678901234567890'];
  const wrongNumbers = [undefined, null, ' ', '1234', '012345'];

  it(`${numbers} 都是正确的 QQ 号码`, () => {
    numbers.should.matchEach((item) => { should(isQQNumber(item)).ok(); });
  });

  it(`${wrongNumbers} 都是不正确的 QQ 号码`, () => {
    wrongNumbers.should.matchEach((item) => { should(isQQNumber(item)).not.ok(); });
  });
});
