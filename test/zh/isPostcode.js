const should = require('should');
const isPostcode = require('../../lib/zh').isPostcode;

/**
 * 国内邮编为 0-8 开头的 6 位数字
 */
describe('zh/isPostcode', () => {
  const codes = ['110011', '110000', '857200', '999079', '999077'];
  const wrongCodes = [undefined, null, ' ', '11000', '992876', '1100110'];

  it(`${codes} 都是正确的邮政编码`, () => {
    codes.should.matchEach((item) => { should(isPostcode(item)).is.exactly(true); });
  });

  it(`${wrongCodes} 都不是正确的邮政编码`, () => {
    wrongCodes.should.matchEach((item) => { should(isPostcode(item)).is.exactly(false); });
  });
});
