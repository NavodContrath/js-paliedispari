/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

/*SUMMARY
- const for userChoice and userNumber
- function to get the numbers of the pc
- function that sums the number and tell IF isEvenorOdd
- results
*/
const userChoice = prompt("Choose between even or odd")
const userNumber = Number(prompt("type your number choose from 1 to 5"))
console.log(userChoice, userNumber);
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomNumber(1, 5)
console.log(randomNumber);
function sum(num1, num2) {
    return num1 + num2
}
const summedNumbers = sum(userNumber, randomNumber)
console.log(summedNumbers);
function isEvenorOdd() {
    if (summedNumbers % 2 === 0) {
        return true
    } else {
        return false
    }
}
if (isEvenorOdd(userNumber) && userChoice === "even") {
    console.log("User Wins!");
} else if (!isEvenorOdd(userNumber) && userChoice === "odd") {
    console.log("User Wins!");
} else {
    console.log("Pc Wins!");
}






