const assert = chai.assert;

describe('Classes', () => {
  it('Define a class named "Person".', () => {
    assert.typeOf(Person, 'function');

    const person = new Person('arnelle', 25);
  });

  it('Add a method named "getName" that returns the person\'s name.', () => {
    const person = new Person('arnelle', 25);
    assert.typeOf(person.getName, 'function');
    assert.equal(person.getName(), 'arnelle');
  });

  it('Add a method named "setName" that sets the person\'s new name.', () => {
    const person = new Person('arnelle', 25);
    assert.typeOf(person.setName, 'function');
    person.setName('newname');
    assert.equal(person.getName(), 'newname');
  });

  it('Add a method named "isAdult" that returns whether the person is an adult (at least 18 years old) or not.', () => {
    const person = new Person('arnelle', 25);
    assert.typeOf(person.isAdult, 'function');
    assert.isTrue(person.isAdult());
  });
});
