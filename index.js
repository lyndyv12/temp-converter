// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
let convertednum
function convertToCelsius(fahren) {
  convertednum = fahren * 9/5 + 32
};

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */

function createMessage(fahren, celc) {
  let temptocheck;
  
  if (fahren != null){
    temptocheck = fahren;
  } else if (celc != null) {
    temptocheck = (celc*9/5) + 32;
  } else {
    return 'Temperature has not been provided';
  }
    
  if (temptocheck < 32) {
    return 'very cold';
  }
  else if (temptocheck < 64) {
    return 'cold';
  }
  else if (temptocheck < 86) {
    return 'warm';
  }
  else if (temptocheck <100) {
    return 'hot';
  }
}


/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.random()*(limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
