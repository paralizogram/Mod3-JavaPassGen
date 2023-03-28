// Assignment Code
var generateBtn = document.querySelector("#generate"); // link to html button id, line 28?

// tried plcing these variables within generatePassword function, but got error, so moved out, so function could call on them?
// could toLowerCase() / toUpperCase() methods be useful here at all?
  var characterTypes = ["length, lowerCase, uppercase, specialChar"]; // not sure what I'm doing here, can this be an array of arrays?
  var length = [];
  var lowerCase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
  // UpperCase = LowerCase.toUpperCase(); I wouldn't know how to make this work...
  var upperCase = ["A, "];
  var specialChar = [];

  function generatePassword() {
 
  return 
}
//console.log("confirm button"); // tip to console log as you go
// generatePassword function needs to be 'defined'so it can be used within writePassword function

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // how to define this function? console says Uncaught ref Error: generatePassword is not defined
  var passwordText = document.querySelector("#password"); // link to html id, line 22?

  passwordText.value = password; // display

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// TIP: Write pseudo-code out

// 1. need a pop up window when user clicks button to gain password criteria
    // 1.a Criteria: length option between 8 to 128 characters
    // 1.b Criteria: character types? lowercase, uppercase, numeric &/or special characters
      // do I need arrays for 'umbrella' character types?  
      // do I need to add array options for each character type? TIP? READ ME includes link to list of password characters 
            // ie. set parameters for length, then set character type options array, then define array for each char type option 

      // 1.c HELP??? validate input? at least one character type should be selected (Meaning?)
// 2. When all above prompts answered, password generated and either:
    // 1. Display in an alert (pop up?)?
    // 2. Written to page? (in card where "Your secure password" initially written)
