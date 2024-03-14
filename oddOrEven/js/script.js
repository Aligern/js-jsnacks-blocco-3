//we need to create a function to verify if a number is odd or even, then we ask the user a number and print if it is odd or even.

let userNumber = parseInt(prompt("type a number"));

function oddOrEven (number) {
    if (number % 2 === 0) {
        return 'even';
    }   else {
        return 'odd';
    }
};