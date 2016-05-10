describe('Javascript Workshop - Challenges Set 1', function() {
    it('01. Declare a variable named `havingFun` which, as the name suggests, '
    + 'stores a boolean for whether you are having fun in this workshop or '
    + 'not.', function() {
        expect(havingFun).toBe(true);
    });

    it('02. Declare two variables named `firstName` and `lastName`, and '
    + 'assign your first and last names accordingly.', function() {
        expect(typeof firstName).toBe('string');
        expect(typeof lastName).toBe('string');
    });

    it('03. Declare a variable named `fullName` and assign to it your full '
    + 'name.', function() {
        expect(fullName).toBe(firstName + ' ' + lastName);
    });

    it('04. Declare a variable named `mathResult` and assign to it the result '
    + 'of this equation: 1 * (3 - 5) / 7 + 11 * (13 - 17)', function() {
        expect(mathResult).toBe(1 * (3 - 5) / 7 + 11 * (13 - 17));
    });

    it('05. Declare a variable named `oddNumbers` and assign it an array '
    + 'containing all the positive odd numbers that are below 20.',
    function() {
        expect(oddNumbers).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    });

    it('06. Declare a variable named `magicSquare` and assign it a 3x3 magic '
    + 'square using nested arrays.', function() {
        var ms = magicSquare;
        var sum = ms[0][0] + ms[0][1] + ms[0][2];
        expect(ms[0][0] + ms[0][1] + ms[0][2]).toBe(sum);
        expect(ms[1][0] + ms[1][1] + ms[1][2]).toBe(sum);
        expect(ms[2][0] + ms[2][1] + ms[2][2]).toBe(sum);
        expect(ms[0][0] + ms[1][0] + ms[2][0]).toBe(sum);
        expect(ms[0][1] + ms[1][1] + ms[2][1]).toBe(sum);
        expect(ms[0][2] + ms[1][2] + ms[2][2]).toBe(sum);
        expect(ms[0][0] + ms[1][1] + ms[2][2]).toBe(sum);
        expect(ms[0][2] + ms[1][1] + ms[2][0]).toBe(sum);
    });

    it('07. Declare a variable named `person` and assign it an object with '
    + 'the following keys: `firstName`, `lastName`, `age`. You can assign any '
    + 'values that you want to those keys.', function() {
        expect(typeof person).toBe('object');
        expect(person.hasOwnProperty('firstName')).toBe(true);
        expect(person.hasOwnProperty('lastName')).toBe(true);
        expect(person.hasOwnProperty('age')).toBe(true);
    });

    it('08. Declare a variable named `anotherPerson` and assign it an object '
    + 'with the following keys: `name`, `age`. The `name` key should be an '
    + 'object with the following keys: `first`, `last`. The values for these '
    + 'keys should be based on the `person` variable.', function() {
        expect(typeof anotherPerson).toBe('object');
        expect(typeof anotherPerson.name).toBe('object');
        expect(anotherPerson.name.first).toBe(person.firstName);
        expect(anotherPerson.name.last).toBe(person.lastName);
        expect(anotherPerson.age).toBe(person.age);
    });
});
