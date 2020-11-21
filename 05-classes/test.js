const assert = chai.assert;

describe('Classes', () => {
  it('Define a class named "Person".', () => {
    assert.typeOf(Person, 'function');

    const person = new Person('arnelle', 25);
    assert.typeOf(person.getName, 'function');
    assert.typeOf(person.setName, 'function');
    assert.typeOf(person.isAdult, 'function');
    assert.equal(person.getName(), 'arnelle');
    person.setName('newname');
    assert.equal(person.getName(), 'newname');
    assert.isTrue(person.isAdult());
  });
});
