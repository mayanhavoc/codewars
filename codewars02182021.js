// Hey awesome programmer!
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
// Go on and code some pure awesomeness!

const nextId = (ids) => {
  const used = new Set(ids);

  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
};

// function nextId(ids){
//     for (i = 0; i < ids.length; i++) {
//       if (ids.indexOf(i) == -1){
//         return i;
//       }
//     }
//     return ids.length;
//   }

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x) {
//   if (x !== Number(x)) {
//     return "Error";
//   } else {
//     return x * 50 + 6;
//   }
// }

const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

function aspectRatio(x, y) {
    x = Math.ceil(y * 16/9);
    y = Math.floor(x * 9/16);
    return [x, y];
  }


  This program tests the life of an evaporator containing a gas.

  We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
  
  The program reports the nth day (as an integer) on which the evaporator will be out of use.
  
  Example:
  evaporator(10, 10, 5) -> 29
  Note:
  Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.