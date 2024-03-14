//  Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
const array1 = [];
let sum = 0;



while (sum < 50) {
    let userNumber = parseInt(prompt("Inserisci numeri"));
    if (!isNaN(userNumber)) {
        sum += userNumber;
        array1.push(userNumber);
    } else {
        console.log("inserisci un numero valido")
    }
};

console.log(sum);
console.log(array1);