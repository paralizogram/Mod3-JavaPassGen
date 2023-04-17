// Assignment Code
var generateBtn = document.querySelector("#generate"); // link to html button id, line 28?

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = [" ", "!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^","`", "{", "|", "}", "~"]; // not sure how to deal with some characters on list, like spaces, double quotes, etc - double quoting each did not work,left a few out that were messing up the array, like " & _ symbols
var numbers = [0,1,2,3,4,5,6,7,8,9]

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); // moved up, so flow is sequential. click button, generate password, then write password
  
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 
}
  passwordText.value = password; // display test "hello" instead of password worked

  function generatePassword() {
    let charTypes = []; // array of arrays chosen through prompts
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

    let password = "";
    // couldn't get this to work until I realized math needs to be 'Math' - Capitals matter, ha!
    for(var i =0; i < length; i++) {
      var randomizer = Math.floor(Math.random() * charTypes.length); // looked up math.random, pair with math.floor (don't quite understand - seems related to rounding) and multiply by length of charType array (populated by user prompt arrays chosen)
      password = password + charTypes[randomizer]; 
    }

    return password; // display test "works" instead of password or true worked
  }

