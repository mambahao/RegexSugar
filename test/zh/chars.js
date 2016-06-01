const should = require('should');
const faker = require('faker');
const isAllChineseChars = require('../../lib/zh').isAllChineseChars;

faker.locale = 'zh_CN';

describe('zh/isAllChineseChars', () => {
  const address = faker.address;

  const words = [address.state(), `${address.state()}`];
  const wrongWords = [undefined, null, ' ', 'test', `${address.streetAddress()} ${address.secondaryAddress()}`];

  it(`${words} 都是正确的中文字符`, () => {
    words.should.matchEach((item) => { should(isAllChineseChars(item)).ok(); });
  });

  it(`${wrongWords} 都不完全是中文字符`, () => {
    wrongWords.should.matchEach((item) => { should(isAllChineseChars(item)).not.ok(); });
  });

  const ext = '［,!\\-a］';

  it(`${words} 排除 ${ext} 都是正确的中文字符`, () => {
    words.should.matchEach((item) => { should(isAllChineseChars(`［${item}］`, ext)).ok(); });
  });

  it(`${wrongWords} 排除 ${ext} 都不完全是中文字符`, () => {
    wrongWords.should.matchEach((item) => { should(isAllChineseChars(`${item}${ext}+`, ext)).not.ok(); });
  });
});
