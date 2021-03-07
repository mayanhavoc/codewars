// #For Twins: 2. Math operations
// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.The bricks width and height are equal, forming a square. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will except these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// The formula to calculate the volume of a cube is: volume = a3

const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

// ----

// # Steps in primes
// The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1. From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:
// 3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43
// We will write a function step with parameters:
// g (integer >= 2) which indicates the step we are looking for,
// m (integer >= 2) which gives the start of the search (m inclusive),
// n (integer >= m) which gives the end of the search (n inclusive)
// In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.
// So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m, n if these g-steps prime numbers exist otherwise nil or null or None or Nothing or [] or "0, 0" or {0, 0} or 0 0(depending on the language).

// Examples:
// step(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7} or "5 7"
// step(2, 5, 5) --> nil or ... or [] in Ocaml or {0, 0} in C++
// step(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
// See more examples for your language in "TESTS"

// Remarks:
// ([193, 197] is also such a 4-steps primes between 130 and 200 but it's not the first pair).
// step(6, 100, 110) --> [101, 107] though there is a prime between 101 and 107 which is 103; the pair 101-103 is a 2-step.

// Notes:
// The idea of "step" is close to that of "gap" but it is not exactly the same. For those interested they can have a look at http://mathworld.wolfram.com/PrimeGaps.html.
// A "gap" is more restrictive: there must be no primes in between (101-107 is a "step" but not a "gap". Next kata will be about "gaps":-).
// For Go: nil slice is expected when there are no step between m and n. Example: step(2,4900,4919) --> nil

function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
  return null;
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}

// ----

// # +1 Array

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
  arr.reduce((acc, cv) => acc + cv + 1);
  console.log(arr);
}

// ----

// # If you can read this...
// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
// Input:
// If, you can read?
// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
// Note:
// The set of used punctuation is .!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

function to_nato(words) {
  return words
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .map(e => (NATO[e] ? NATO[e] : e))
    .join(" ");
}

// ---- 

// # Mexican Wave
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

// Task
//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules
// 1. The input string will always be lower case but may be empty.
// 2. If the character in the string is whitespace then pass over it as if it was an empty seat. 

// 1. check for empty - if - no string - then return
// 2. check for whitespace - if there is whitespace - ignore it (regEx probably)

// function wave(str){
//   // check if the string is empty, if it is - return
//   if (!string){
//     return
//   }
//   // Turn the string into an array so I can iterate over it
//   let arr = str.split(''); // -> [ 'h', 'e', 'l', 'l', 'o' ]
//   // Create a for loop to be able to grab every element of the array
  
// }

function wave(str){
  // return an Array from 
}
