const clearPunctuations = require('../lib').clearPunctuations;

describe('clearPunctuations', () => {
  const canClearStrings = ['!"#$%&\'(){}=-~^|*:+;\\_', '　《》！（），－_'];
  const cannotClearStrings = ['1, h. ', '1234567890123456', '210102198719102765', '012345'];

  it(`${canClearStrings} 都可以清理为空`, () => {
    canClearStrings.should.matchEach((item) => clearPunctuations(item).should.have.length(0));
  });

  it(`${canClearStrings} 在排除 _ 的情况下都不可以清理为空`, () => {
    canClearStrings.should.matchEach((item) => clearPunctuations(item, /[_]/g).length.should.be.aboveOrEqual(1));
  });

  it(`${cannotClearStrings} 都不可以清理为空`, () => {
    cannotClearStrings.should.matchEach((item) => clearPunctuations(item).length.should.be.above(0));
  });
});
