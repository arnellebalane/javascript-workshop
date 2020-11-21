const assert = chai.assert;

describe('Arrays and Objects', () => {
  it('Declare a function named "isNumberInArrayLoop".', () => {
    assert.typeOf(isNumberInArrayLoop, 'function');
    assert.isTrue(isNumberInArrayLoop([1, 2, 3], 3));
    assert.isFalse(isNumberInArrayLoop([1, 2, 3], 4));
  });

  it('Declare a function named "isNumberInArray".', () => {
    assert.typeOf(isNumberInArray, 'function');
    assert.isTrue(isNumberInArray([1, 2, 3], 3));
    assert.isFalse(isNumberInArray([1, 2, 3], 4));
  });

  it('Declare a variable named "me".', () => {
    assert.typeOf(me, 'object');
    assert.typeOf(me.firstName, 'string');
    assert.typeOf(me.lastName, 'string');
    assert.isTrue(me.favoriteNumbers instanceof Array);
    me.favoriteNumbers.forEach((number) => {
      assert.typeOf(number, 'number');
    });
    assert.typeOf(me.socialAccounts, 'object');
    assert.typeOf(me.socialAccounts.facebook, 'string');
    assert.typeOf(me.socialAccounts.twitter, 'string');
  });
});
