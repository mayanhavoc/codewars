// #CSV representation of array
// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
// [[ 0, 1, 2, 3, 4 ],
// [ 10,11,12,13,14 ],
// [ 20,21,22,23,24 ],
// [ 30,31,32,33,34 ]] 

// output:
//  '0,1,2,3,4\n'
// +'10,11,12,13,14\n'
// +'20,21,22,23,24\n'
// +'30,31,32,33,34'

// Array's length > 2.

// function toCsvText(array) {
//     for (let i = 0; i <=5; i++){
//         return array.slice(0, 5) + '\n';
//     }
//  }

 function toCsvText(array) {
    return array.join('\n');
 }

// ---

// #N-th Power
// This kata is from check py.checkio.org
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// function index(array, n){
//     //your code here
//     let n = array.indexOf(n);
//     array = Math.pow(array[n], n);
//     return array;
//   }

function index(array, n){
    if (array.length-1-n<0) return -1
    return Math.pow(array[n],n)
  }

// ---

// # Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?

    function addFive(num) {
        let total = num + 5
        return total;
    }

    