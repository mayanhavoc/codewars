// # Squash the bugs
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  
    let spl = str.split("");
    let longest = 0;
    
    for (let i = 0; i > spl.length(); i++) {
        if (spl[i].length() > longest) {
            longest = spl[i].length
    }};
          return longest  
    }
      
// # Can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    // good luck
    if ( number % a === 0 && number % b === 0) {
        return true;
    } else {
        return false;
    }
}

// # The falling speed of petals
// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

function sakuraFall(v) {
    // your code here
    if (v <= 0) {
        return 0;
    } else if (v > 0) {
        const distance = 400;
       const time = distance/v;
      return time;
    }
  }

// # Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String


function hello(name) {
    return `Hello, ${
         name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World" }!`;
 }

 // # Grasshopper - If/else syntax debug
 // If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

const checkAlive = health => health > 0 ? true : false;

// # Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

const main = (verb, noun) => {return `${verb + noun}`};

// ---

// # Grasshopper - Debug sayHello
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:
// Hello, Mr. Spock

const sayHello = name => {return `Hello, ${name}`};

// --- 

// # Capitalization and Mutability
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
   return word[0].toUppercase() + word.slice(1).toLowerCase();
  }

// ---

// # Grasshopper - Debug
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if (c < 0) {
        return c + " is freezing temperature";
    } else if (c > 0) {
       return c + " is above freezing temperature";
    }
     
  
  function convertToCelsius (temperature) {
    let celsius = ((temperature) - 32) * (5/9);
    return celsius;
  }}

// ---

// # Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(4, 4) --> 16

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);

// # Grasshopper - Messi Goals
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:
//
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

const laLigaGoals = 43
const championsLeagueGoals = 10
const copaDelReyGoals = 5

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;