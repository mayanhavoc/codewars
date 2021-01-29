// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length -1; i++) {
//     const curr = arr[i];
//     const next = arr[i + 1];
//     if (curr + 1 != next) {
//       return next;
//     }
//   }
// }

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }

function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return Number.isInteger(result) ? result : null;
}

// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
  return values.filter((val) => val % 2 === 0);
}

var noOdds = (values) => values.filter((x) => x % 2 === 0);

var noOdds = (values) => values.filter((x) => !(x % 2));

// The Rub

// You need to make a function that takes an object as an argument, and returns a very similar object but with a special property. The returned object should allow a user to access values by providing only the beginning of the key for the value they want. For example if the given object has a key idNumber, you should be able to access its value on the returned object by using a key idNum or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.

// Be aware that you could simply add all these partial keys one by one to the object. However, for the sake of avoiding clutter, we don't want to have a JSON with a bunch of nonsensical keys. Thus, in the random tests there will be a test to check that you did not add or remove any keys from the object passed in or the object returned.

// Also, if a key is tested that appears as the beginning of more than one key in the original object (e.g. if the original object had a key idNumber and idString and we wanted to test the key id) then return the value corresponding with whichever key comes first alphabetically. (In this case it would be idNumbers value because it comes first alphabetically.)

// 1. Loop over the properties of the object
// 2. Create all the substring properties on that obj and assign them to the value

function partialKeys(obj) {
  const newObj = {};

  Object.keys(obj)
    .sort()
    .reverse()
    .forEach((key) => {
      const value = obj[key];
      // <- Object.keys(obj) returns an array of all the properties of the object. Then we loop over each 'key'.
      for (let i = 0; i < key.length; i++) {
        const newKey = key.substring(0, i + 1);
        newObj[newKey] = value;
      }
    });

  return newObj;
}

