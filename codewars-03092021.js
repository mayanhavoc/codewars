// #The most asked question on CodeWars
// What is the most asked question on CodeWars?
// Can someone explain /*...*/?
// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.
// Let's hope you don't write a solution that makes people ask that question at you!

function detect(comment) {
    return comment.startsWith('Can someone explain');
   }


// # Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]

const arr = n => Array.from({length: n}, (_, i) => i);

// ---

// # USD => CNY
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// For Example:
//   usdcny(15) // => '101.25 Chinese Yuan'
//  usdcny(465) // => '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

function usdcny(usd) {
    let exchange = 6.75;
    let yuan = usd * exchange;
    return `${yuan.toFixed(2)} Chinese Yuan` 
   }

// # Sum The Strings
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
//   sumStr("4", "5")    // should output "9"
//  sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.

// function sumStr(a,b) {
//   a = parseFloat(a);
//   b = parseFloat(b);
//   sum = a + b;
//   string = parseInt(sum);
//   return string;
// }

function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

  // # Convert to Binary
  // Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

function toBinary(n){
    let binary = (n >>> 0).toString(2);
    binary = Number(binary);
    return binary;
  }

// # Take the Derivative
// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

function derive(coefficient,exponent) {
    const product = coefficient * exponent;
    const exp = exponent - 1;
    return `${product}x^${exp}`
   }

// # Function 2 - squaring an argument
// Now you have to write a function that takes an argument and returns the square of it.

const square = num => {return Math.pow(num, 2)}

// ---

// Dollars and Cents
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
// 3 needs to become $3.00
// 3.1 needs to become $3.10

function formatMoney(amount){
    // your formatting code here
    return `$${amount.toFixed(2)}`
  }

// # Will there be enough space?
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// enough(10, 5, 5);
// 0, He can fit all 5 passengers
// enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting

function enough(cap, on, wait) {
    // your code here
    if (cap - on - wait > 0){
        return 0;
    } else {
        return wait - (cap - on);
    }
  }