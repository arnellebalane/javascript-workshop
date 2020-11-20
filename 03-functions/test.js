const assert = chai.assert;

describe('Functions', () => {
  it('Declare a function named "computeSumOfIntegers".', () => {
    assert.typeOf(computeSumOfIntegers, 'function');
    assert.isNull(computeSumOfIntegers(0));
    assert.isNull(computeSumOfIntegers(51));
    assert.equal(computeSumOfIntegers(10), 55);
    assert.equal(computeSumOfIntegers(15), 120);
  });

  it('Declare a function named "computeSumOfIntegersDivisibleBy3Or5".', () => {
    assert.typeOf(computeSumOfIntegersDivisibleBy3Or5, 'function');
    assert.isNull(computeSumOfIntegersDivisibleBy3Or5(0));
    assert.isNull(computeSumOfIntegersDivisibleBy3Or5(51));
    assert.equal(computeSumOfIntegersDivisibleBy3Or5(10), 119);
    assert.equal(computeSumOfIntegersDivisibleBy3Or5(15), 258);
  });

  it('Declare a function named "isProductOfIntegersEven".', () => {
    assert.typeOf(isProductOfIntegersEven, 'function');
    assert.isNull(isProductOfIntegersEven(0));
    assert.isNull(isProductOfIntegersEven(51));
    assert.isTrue(isProductOfIntegersEven(13));
    assert.isTrue(isProductOfIntegersEven(15));
  });
});
