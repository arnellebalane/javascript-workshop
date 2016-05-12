/**
 *  Tilde Community - Javascript Workshop
 *  Challenge Set 2
 *
 *  Fill up the blank spaces with your code solutions. When you're done,
 *  open the `test-runner.html` file in your browser.
 **/


// 01. Declare a variable named `fullName` and assign to it your full name.

var fullName = 'Arnelle Balane';


// 02. Declare a variable named `isAwesome`. If your name is full name is
// longer than 20 letters, set `isAwesome` to "Whoa, so awesome!". If it is
// longer than 10 letters, set `isAwesome` to "Not really.". Otherwise, set
// `isAwesome` to "Booooo!".

var isAwesome;

if (fullName.length > 20) {
    isAwesome = 'Whoa, so awesome!';
} else if (fullName.length > 10) {
    isAwesome = 'Not really.';
} else {
    isAwesome = 'Booooo!';
}


// 03. Declare a variable named `oddNumbers` and assign to it an array of all
// the positive odd numbers less that 1000.

var oddNumbers = [];

for (var i = 1; i < 1000; i += 2) {
    oddNumbers.push(i);
}


// 04. Declare a variable named `myObject` and give it at least five key-value
// pairs. The keys and values can be anything you want.

var myObject = {
    alpha: 'a',
    beta: 'b',
    delta: 'd',
    epsilon: 'e',
    gamma: 'g'
};


// 05. Declare a variable named 'vowelKeys' and assign to it an array of keys
// from `myObject` that start with a vowel.

var vowelKeys = [];

for (var key in myObject) {
    if (key[0] === 'a' || key[0] === 'e' || key[0] === 'i' || key[0] == 'o' || key[0] === 'u') {
        vowelKeys.push(key);
    }
}
