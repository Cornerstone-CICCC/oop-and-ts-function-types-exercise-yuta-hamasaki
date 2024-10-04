"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...numbers) {
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer = answer + numbers[i];
    }
    return answer;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
