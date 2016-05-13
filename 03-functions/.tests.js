describe('Javascript Workshop - Challenges Set 2', function() {
    it('01. Write a unary function named `identity` which accepts a parameter '
    + 'and returns that parameter.', function() {
        expect(identity(12)).toBe(12);
    });

    it('02. Write a binary function named `multiply` which accepts two '
    + 'parameters and returns their product.', function() {
        expect(multiply(2, 3)).toBe(6);
    });

    it('03. Write a unary function named `identityf` which accepts a '
    + 'parameter and returns a function that returns that parameter.',
    function() {
        expect(typeof identityf(3)).toBe('function');
        expect(identityf(3)()).toBe(3);
    });

    it('04. Write a unary function named `multiplyf` which accepts one '
    + 'parameter, returns another unary function that accepts another '
    + 'parameter and returns the product of the two parameters.', function() {
        expect(typeof multiplyf(3)).toBe('function');
        expect(multiplyf(2)(3)).toBe(6);
    });

    it('05. Write a function named `twice` which accepts a binary function '
    + 'and returns a unary function which passes the parameter it receives to '
    + 'the binary function twice.', function() {
        function multiply(a, b) { return a * b; }
        expect(typeof twice(multiply)).toBe('function');
        expect(twice(multiply)(3)).toBe(9);
    });

    it('06. Define the function named `square` using the functions that '
    + 'you\'ve written in the previous challenges.', function() {
        expect(square(4)).toBe(16);
    });

    it('07. Write a function named \'compose\' which accepts two unary '
    + 'functions as parameters and composes those functions.', function() {
        expect(compose(square, identity)(3)).toBe(9);
    });
});
