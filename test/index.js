const should = require('should');
const isEmail = require('../lib/isEmail').isEmail;

describe('isEmail 函数的测试', () => {
  it('hibernate3@gmal.com 是正确的 EMAIL 地址', () => {
    should(isEmail('hibernate3@gmail.com')).is.exactly(true);
  });

  it('hibernate3@gmal 是错误的 EMAIL 地址', () => {
    should(isEmail('hibernate3@gmail')).is.exactly(false);
  });

  it('@gmal.com 是错误的 EMAIL 地址', () => {
    should(isEmail('@gmail.com')).is.exactly(false);
  });

  it('hibernate3#gmal.com 是错误的 EMAIL 地址', () => {
    should(isEmail('@gmail.com')).is.exactly(false);
  });
});
