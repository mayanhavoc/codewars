// # Parse float
// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// function parseF(s) {
//     if (!s) {
//         return null;
//     } else {
//         return Number.parseInt(s);
//     }
//   }

function parseF(s) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
  }

// ---

// # String repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeatStr = (n, s) => {return s.repeat(n)};

// ---

// # Short Long Short
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
// For example:
// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// function solution(a, b){
//     // your code here
//     const lengthOfA = a.length;
//     const lengthOfB = b.length;
//     if ( a.length > b.length) {
//         return `${b}${a}${b}`
//     } else if (a.length < b.length) {
//         return `${a}${b}${a}`
//     }
//   }

  const solution = (a,b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

// ---

// # Coefficients of the Quadratic Equation

// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

// Example 2
// quadratic(0,1) = (1, -1, 0)
// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

// Notes
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two

// function quadratic(x1, x2){
//   // Answer in array
//   const quadratic = a*Math.pow(x,2) + b*x + c;
//   c = -(Math.pow(x, 2) + b*x); 
//   b = -(Math.pow(x,2) + c)/2;
//   return quadratic;
//   }

function quadratic (x1, x2) {
  return [1, -x1 -x2 , x2*x1];
}

// ---

// # Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  if (n%x===0 && n%y===0 ){
    return true
  } else {
    return false;
  }
}