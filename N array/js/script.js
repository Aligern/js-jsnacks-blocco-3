// Snack3
// we ask the user an N number
// we generate N arrays with a function, each array need to have 10 random numbers between 1 and 100.

// every time we create one we print it:


// we ask the user our N number:
let N = parseInt(prompt('inserisci un numero'));

// this for loop generates N arrays:
for (let i = 0; i < N; i++) {
    const result = createArray ();
    console.log(createArray());
}

// this function generate the random numbers inside our arrays:
function createArray () {
    let newArray = [];
    for (i = 0; i <= 10; i++) {
        newArray.push(getRndInteger(1,100));
    }
    return newArray;
};


// this function generate random numbers:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};