const should = require('should');
const isIDCardNumber = require('../../lib/zh').isIDCardNumber;

describe('zh/isIDCardNumber', () => {
  const numbers = ['210102198710102765', '21010219651010345x'];
  const wrongNumbers = [undefined, null, ' ', '1234567890123456', '210102198719102765', '012345'];

  it(`${numbers} 都是正确的身份证号码`, () => {
    numbers.should.matchEach((item) => { should(isIDCardNumber(item)).ok(); });
  });

  it(`${wrongNumbers} 都是不正确的身份证号码`, () => {
    wrongNumbers.should.matchEach((item) => { should(isIDCardNumber(item)).not.ok(); });
  });
});
