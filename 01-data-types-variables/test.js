const assert = chai.assert;

describe('Data Types', () => {
  it('Declare variables named "firstName" and "lastName". Set their corresponding values to your first and last names.', () => {
    assert.typeOf(firstName, 'string');
    assert.typeOf(lastName, 'string');
  });

  it('Declare a variable named "fullName". Set its value to your full name using the previous variables, separated by a space.', () => {
    assert.typeOf(fullName, 'string');
    assert.equal(fullName, `${firstName} ${lastName}`);
  });

  it('Declare a variable named "favoriteNumber". Set its value to your favorite number.', () => {
    assert.typeOf(favoriteNumber, 'number');
  });

  it('Declare a variable named "isStudent". Set its value to whether you are a student or not.', () => {
    assert.typeOf(isStudent, 'boolean');
  });

  it('Declare a variable named "falsyValue". Set its value to any falsy value, other than "false".', () => {
    assert.isNotOk(falsyValue);
    assert.isNotFalse(falsyValue);
  });
});
