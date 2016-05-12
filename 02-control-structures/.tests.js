describe('Javascript Workshop - Challenges Set 2', function() {
    it('01. Declare a variable named `fullName` and assign to it your full '
    + 'name.', function() {
        expect(typeof fullName).toBe('string');
    });

    it('02. Declare a variable named `isAwesome`. If your name is full name '
    + 'is longer than 20 letters, set `isAwesome` to "Whoa, so awesome!". If '
    + 'it is longer than 10 letters, set `isAwesome` to "Not really.". '
    + 'Otherwise, set `isAwesome` to "Booooo!".', function() {
        if (fullName.length > 20) {
            expect(isAwesome).toBe('Whoa, so awesome!');
        } else if (fullName.length > 10) {
            expect(isAwesome).toBe('Not really.');
        } else {
            expect(isAwesome).toBe('Booooo!');
        }
    });

    it('03. Declare a variable named `oddNumbers` and assign to it an array '
    + 'of all the positive odd numbers less that 1000.', function() {
        var result = [];
        for (var i = 1; i < 1000; i += 2) {
            result.push(i);
        }
        expect(oddNumbers).toEqual(result);
    });

    it('04. Declare a variable named `myObject` and give it at least five '
    + 'key-value pairs. The keys and values can be anything you want.',
    function() {
        expect(Object.keys(myObject).length >= 5).toBe(true);
    });

    it('05. Declare a variable named \'vowelKeys\' and assign to it an array '
    + 'of keys from `myObject` that start with a vowel.', function() {
        var result = Object.keys(myObject).filter(function(key) {
            return /^[aeiou]/.test(key);
        });
        expect(vowelKeys).toEqual(result);
    });
});
