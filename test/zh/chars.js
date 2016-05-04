const should = require('should');
const faker = require('faker');
const isAllChineseChars = require('../../lib/zh').isAllChineseChars;

faker.locale = 'zh_CN';

describe('zh/isAllChineseChars', () => {
  const address = faker.address;

  const words = [address.state(), `${address.state()}`];
  const wrongWords = [undefined, null, ' ', 'test', `${address.streetAddress()} ${address.secondaryAddress()}`];

  it(`${words} 都是正确的中文字符`, () => {
    words.should.matchEach((item) => { should(isAllChineseChars(item)).is.exactly(true); });
  });

  it(`${wrongWords} 都不完全是中文字符`, () => {
    wrongWords.should.matchEach((item) => { should(isAllChineseChars(item)).is.exactly(false); });
  });

  const ext = '［,!\\-a］';

  it(`${words} 排除 ${ext} 都是正确的中文字符`, () => {
    words.should.matchEach((item) => { should(isAllChineseChars(`［${item}］`, ext)).is.exactly(true); });
  });

  it(`${wrongWords} 排除 ${ext} 都不完全是中文字符`, () => {
    wrongWords.should.matchEach((item) => { should(isAllChineseChars(`${item}${ext}+`, ext)).is.exactly(false); });
  });
});
