const should = require('should');
const isFixedPhoneNumber = require('../../lib/zh').isFixedPhoneNumber;
const isMobilePhoneNumber = require('../../lib/zh').isMobilePhoneNumber;

describe('zh/isMobilePhoneNumber', () => {
  const numbers = [
    '13345678901', '15345678901', '15345678901', '18045678901', '18145678901', '18945678901', '17745678901',
    '13045678901', '13145678901', '13245678901', '15545678901', '15645678901', '14545678901', '18545678901', '18645678901', '17645678901', '18515678901',
    '13445678901', '13545678901', '13645678901', '13745678901', '13945678901', '15045678901', '15145678901', '15245678901', '15845678901', '15945678901', '18245678901',
    '18345678901', '18445678901', '15765678901', '18745678901', '18845678901', '14745678901', '17845678901',
  ];
  const wrongNumbers = [undefined, null, ' ', '180456789o1', '189768765431', '1534567801'];

  it(`${numbers} 都是正确的手机号码`, () => {
    numbers.should.matchEach((item) => { should(isMobilePhoneNumber(item)).ok(); });
  });

  it(`${wrongNumbers} 都是不正确的手机号码`, () => {
    wrongNumbers.should.matchEach((item) => { should(isMobilePhoneNumber(item)).not.ok(); });
  });
});

describe('zh/isFixedPhoneNumber', () => {
  const numbers = ['024-12345678', '010-12345678-233', '010-12345678-1234'];
  const wrongNumbers = [undefined, null, ' ', '010-123456789', '12345-12345678', '[010]12345678'];

  it(`${numbers} 都是正确的固定电话号码`, () => {
    numbers.should.matchEach((item) => { should(isFixedPhoneNumber(item)).ok(); });
  });

  it(`${wrongNumbers} 都是不正确的固定电话号码`, () => {
    wrongNumbers.should.matchEach((item) => { should(isFixedPhoneNumber(item)).not.ok(); });
  });
});
