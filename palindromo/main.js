/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

/*SUMMARY 
- prompt for userWord
- function for palindrome (for loop with length to analyze the word + IF to check each index of the first half of the string and compare it with tha second)
- const with the value(result)
*/
const userWord = prompt("Type here uor word!")
function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return "It's not a palindrome!"
        } else {
            return "It's palindrome!"
        }
    }
}
const result = isPalindrome(userWord)
console.log(result);
