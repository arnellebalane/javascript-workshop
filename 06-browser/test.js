const assert = chai.assert;

describe('Browser', () => {
  it('Change the h1\'s text to "Hello World".', () => {
    const h1 = document.querySelector('h1');
    assert.equal(h1.textContent, 'Hello World');
  });

  it('Change the h1\'s color to "#ff0000".', () => {
    const h1 = document.querySelector('h1');
    assert.equal(getComputedStyle(h1).color, 'rgb(255, 0, 0)');
  });

  it('When the button is clicked, change its text to "Clicked!".', () => {
    const button = document.querySelector('button');
    assert.equal(button.textContent, 'Click here!');

    button.click();
    assert.equal(button.textContent, 'Clicked!');
  });
});
