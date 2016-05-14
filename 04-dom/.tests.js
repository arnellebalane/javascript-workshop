describe('Javascript Workshop - Challenges Set 4', function() {
    it('01. Declare a variable named `h1` and assign to it the <h1> DOM '
    + 'element.', function() {
        expect(h1 instanceof HTMLElement).toBe(true);
        expect(h1.tagName).toBe('H1');
    });

    it('02. Change the text of the <h1> element to your name.', function() {
        expect(h1.textContent).not.toBe('Your Name');
    });

    it('03. Change the text of the <h2> element to the name of your '
    + 'school.', function() {
        expect(h2.textContent).not.toBe('Your School');
    });

    it('04. Remove the <h3> element.', function() {
        expect(document.querySelector('h3')).toBe(null);
    });

    it('05. Insert the following html betweeen the <h1> and <h2> elements:'
    + '<h4>Javascript is awesome!</h4>', function() {
        expect(h4).not.toBe(null);
        expect(h4.previousElementSibling).toEqual(h1);
        expect(h4.nextElementSibling).toEqual(h2);
    });
});
