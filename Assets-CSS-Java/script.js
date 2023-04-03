// Assignment Code
var generateBtn = document.querySelector("#generate"); // link to html button id, line 28?

// could toLowerCase() / toUpperCase() methods be useful here at all?
charTypes = []; // array of arrays chosen through prompts

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // UpperCase = LowerCase.toUpperCase(); I wouldn't know how to make this work... but seems like that could save some time
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = [" ", "!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^","`", "{", "|", "}", "~"]; // not sure how to deal with some characters on list, like spaces, double quotes, etc - double quoting each did not work,left a few out that were messing up the array, like " & _ symbols
var numbers = [0,1,2,3,4,5,6,7,8,9]

// wanted to make sure array items properly listed
// console.log(length);
// console.log(length.length);
// console.log(charTypes);
// console.log(charTypes.length);
// console.log(lowerCase);
// console.log(lowerCase.length);
// console.log(upperCase);
// console.log(upperCase.length);
// console.log(specialChar);
// console.log(specialChar.length);
// console.log(numbers);
// console.log(numbers.length);
  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword); // moved up, so flow is sequential. click button, generate password, then write password
  
  function generatePassword() {
    let length = parseInt(prompt("Enter a number between 8 and 128 to set your password length:")); // converts string "100" to number 100

    if(isNaN(length)) {
      alert("Must choose a numerical value.");
      return null; // if user enters non numerical values
    }
    if(length < 8 || length > 128) {
      alert("Password length must be between 8 and 128. Please try again.");
      return null; // if user enters number less than 8 or more than 128
    }
    if(confirm("Do you want to include lower case letters in your password?"));{
      charTypes = charTypes.concat(lowerCase); // populates charType array to include lowerCase array
    }
    if(confirm("Do you want to include upper case letters in your password?"));{
      charTypes = charTypes.concat(upperCase); // populates charType array to include upperCase array
    }
    if(confirm("Do you want to include special characters in your password?"));{
      charTypes = charTypes.concat(specialChar); // populates charType array to include special characters array
    }
    if(confirm("Do you want to include numbers in your password?"));{
      charTypes = charTypes.concat(numbers); // populates charType array to include numbers array
    }
    console.log(charTypes);
    console.log(charTypes.length); // something wrong with console log check. returns more items, even when saying no to some options?

    return password
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  // how to define this function? console says Uncaught ref Error: generatePassword is not defined
  var passwordText = document.querySelector("#password"); // link to html id, line 22?

  passwordText.value = password; // display

}

// do I need to add a randomizing feature for this function?


// need to get input from user to generate password, https://www.w3schools.com/jsref/met_win_prompt.asp
//function userPrompts() {
   //if (length<8 || length>128);
   //if (length=>8 && length<=128); // problem adding =
   //confirm()
//}

// function userPrompts() {
//   let text;
//   let length = prompt("Enter a number between 8 and 128 to set your password length:");
// }


// generatePassword function needs to be 'defined'so it can be used within writePassword function




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
