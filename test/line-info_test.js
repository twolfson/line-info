var lineInfo = require('../');

describe('A line', function () {
  before(function () {
    this.params = {
      line: 'git checkoutworld',
      cursor: 12
    };
  });

  describe('when analyzed', function () {
    before(function () {
      this.actual = lineInfo(this.params);
    });

    it('matches expected content', function () {
      assert.deepEqual(this.actual, {
        line: {
          value: 'git checkoutworld',
          index: 12,
          partialLeft: 'git checkout',
          partialRight: 'git world',
        },
        words: {
          value: ['git', 'checkoutworld'],
          index: 1,
          partialLeft: ['git', 'checkout'],
          partialRight: ['world']
        },
        word: {
          value: 'checkoutworld',
          index: 8,
          partialLeft: 'checkout',
          partialRight: 'world'
        }
      });
    });
  });
});
