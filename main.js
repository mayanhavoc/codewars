// Invert the numbers
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// What are the inputs?
// The inputs are: numbers and integers and the set of numbers will be inside an array.
// Our input will be an array of integers.

// What are the outputs?
// The output is an array with each number changed to its additive inverse.

// We need to look at and do something to each number in the array. We also want to return a new array with each number changed.
// To do this we can use the map() method.

// Pseudocode
// Step 1: go through each number in the array using the map method
// For each number in the array, we wanto to change it to its additive inverse. The additive inverse of a number "a" is the number that, when added to "a", yelds zero. To get the additive inverse of a number, we can multiply it by -1.
// Step 2: multiply each number by -1
// Finally we need to return the new array
// Step 3: return new array

// function invert(array) {
//   return array.map((x) => {
//     return x * -1;
//   });
// }

// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// // function invert(array) {
//   return array.map(i => 0 - i)
// }

// ########################################

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// What are the inputs?
// The input will be a string, with only alphabets, uppercase and lowercase and numeric digits.

// What is the output?
// The output is a count of repeated alphabetic characters (case-insensitive) and numeric digits in the input string.

// What do we need to do?
// We need to look into each character in the string, compare it to the rest of the characters and determine if it already exists, and if so, how many times.
// We can use the forEach() method.

// function duplicateCount(text) {
//   let text = text.split("");
//   let letter_count = {};
//   text.forEach((x, i) => {
//     if ((letter_count[text[i]] == undefined)
//     letter_count[text[i]] = 0;
//       letter_count[text[i]]++
//     });
//     for (let i in letter_count) {
//       console.log(letter_count[i])
//     }
//   }

// function findRepeat(str) {
//   const arr =  str.split('');
//   const hash = new Map();
//   const result = [];
//   // if repeat the value is false, if no repeat the value is true
//   for (let i = 0; i < arr.length; i++) {
//     if (hash.get(arr[i]) === undefined) {
//       hash.set(arr[i], true);
//     } else {
//       const value = hash.get(arr[i]);
//       if(value) {
//         hash.set(arr[i], !value);
//       }
//     }
//   }
//   hash.forEach((v, k) => {
//     if(!v)
//     result.push(k);
//   });
//   return result;
// }

// CAN'T GET ANY SOLUTION TO WORK YET

// ###################################

// IQ Test

// // Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// What are the inputs?
// The input is an array of numbers.

// What is the output?
// The output is the position of the number that is different in "evenness"
// "Evennness" is defined as x where x % 2 === 0

// function checkEvenness(array){
//   const found = array.find(element => element % 2 === 0)
//   if (found <= 1) {
//     console.log(found[.split(""))
//   }

// }

// const getIndex = (arr) => {
//   return arr.findIndex((x) => arr.filter((v) => v === x).length === 1);
// };

// numbers.forEach((number) => console.log(`${number} -> ${getIndex(number)}`));

//Can't figure this one out

// ########################################

// Sum of differences in an array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// function sumOfDifferences(array){
//   let backwards = array.sort();
//   let sum = backwards.forEach((x, i) => {
//     (x - ++x) + (++x - backwards.length -1)
//   })
// }

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// let nums1 = [1, 2, 3, 4];
// let nums2 = [3, 4, 5, 6];

// function mergeArrays(...arrays) {
//   let mergedArray = [];

//   arrays.forEach((array, i) => {
//     mergedArray = ;
//   });
//   return mergedArray;
// }
// console.log(mergeArrays(nums1, nums2));

function mergeTwoRandom(arr1, arr2) {
  function extractRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    let result = arr[index];
    // remove item from the array
    arr.splice(index, 1);
    return result;
  }
  let result = [];
  while (arr1.length || arr2.length) {
    if (arr1.length) {
      result.push(extractRandom(arr1));
    }
    if (arr2.length) {
      result.push(extractRandom(arr2));
    }
  }
  return result;
}

console.log(mergeTwoRandom([1, 2, 3, 4], [1, 2, 3, 4]));
