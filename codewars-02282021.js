// #Convert a Boolean to a String
// Implement a function which converts the given boolean value into its string representation.
// Note: Only valid inputs will be given

// function booleanToString(b) {
//   if (b !== true) {
//     return "false";
//   } else if (b === true) {
//     return "true";
//   }
//   return "false";
// }

function booleanToString(b) {
  return b ? "true" : "false";
}

// #Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like 'aba', then the result should be '{'a':2, 'b':1}'
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let counts = {};
  string = string.split("");
  counts = string.reduce((map, val) => {
    map[val] = (map[val] || 0) + 1;
    return map;
  }, {});
  if (string) {
    return counts;
  } else {
    return {};
  }
}

function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

// # Longest palindrome
// Find the length of the longest substring in the given string 's' that is the same in reverse.
// As an example, if the input was "I like racecars that go fast", the substring '(racecar)' length would be '7'.
// If the length of the input string is '0', the return value must be '0'.

// const longestPalindrome = function (s) {
//   let count = [];
//   const re = /[\W_]/g; // or let re = /[^A-Za-z0-9]/g;
//   const lowRegStr = s.toLowerCase().replace(re, "").split("");
//   const reverseStr = lowRegStr.split("").reverse();
//   s = reverseStr.split("");
//   s.filter((val, i) => {
//     if (lowRegStr[i] === reverseStr[i]) {
//       count.push(val);
//       console.log(count);
//     }
//   });
// };

function isPalindrome(s) {
  let rev = s.split("").reverse().join("");
  return s === rev;
}

function longestPalindrome(s) {
  let max_length = 0,
    maxp = "";

  for (let i = 0; i < s.length; i++) {
    let subs = s.substr(i, s.length);
    for (let j = subs.length; j > 0; j--) {
      let sub_sub_str = subs.substr(0, j);
      if (sub_sub_str.length <= 1) continue;
      if (isPalindrome(sub_sub_str)) {
        if (sub_sub_str.length > max_length) {
          max_length = sub_sub_str.length;
          maxp = sub_sub_str;
        }
      }
    }
  }
  return maxp;
}
