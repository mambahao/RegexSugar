const should = require('should');
const faker = require('faker');
const isEmail = require('../lib').isEmail;

describe('isEmail', () => {
  const email = faker.internet.email();
  const wrongEmails = [
    undefined, null, ' ',
    email.replace('@', '#'),
    email.substring(0, email.indexOf('@')),
  ];

  it(`${email} 是正确的 EMAIL 地址`, () => {
    should(isEmail(email)).is.exactly(true);
  });

  it(`${wrongEmails} 都是错误的 EMAIL 地址`, () => {
    wrongEmails.should.matchEach((item) => { should(isEmail(item)).is.exactly(false); });
  });
});
