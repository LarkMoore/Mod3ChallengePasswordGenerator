// Assignment code here
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '?', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // || && !== == ===
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var hasLowerCharacters = confirm(
    'Click OK to confirm including lower characters.'
  );

  var hasUpperCharacters = confirm(
    'Click OK to confirm including upper characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  // Variable to store boolean regarding the inclusion of lowercase characters
  // Variable to store boolean regarding the inclusion of uppercase characters
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // Object to store user input then return that object

  let options = {
    length,
    hasSpecialCharacters,
    hasNumericCharacters,
    hasLowerCharacters,
    hasUpperCharacters
  }

  return options;
}

function generatePassword() {
  let options = getPasswordOptions();
  let results = [];
  let possibleChar = [];

  if (options.hasSpecialCharacters === true) {
    for (let i = 0; i < options.length; i++) {
      let randomIndex = Math.floor(Math.random() * specialCharacters.length);
      let randomChar = specialCharacters[randomIndex];
      possibleChar.push(randomChar);

    }
  }

  if (options.hasNumericCharacters === true) {
    for (let i = 0; i < options.length; i++) {
      let randomIndex = Math.floor(Math.random() * numericCharacters.length);
      let randomChar = numericCharacters[randomIndex];
      possibleChar.push(randomChar);

    }
  }

  if (options.hasLowerCharacters === true) {
    for (let i = 0; i < options.length; i++) {
      let randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
      let randomChar = lowerCasedCharacters[randomIndex];
      possibleChar.push(randomChar);

    }
  }

  if (options.hasUpperCharacters === true) {
    for (let i = 0; i < options.length; i++) {
      let randomIndex = Math.floor(Math.random() * upperCasedCharacters.length);
      let randomChar = upperCasedCharacters[randomIndex];
      possibleChar.push(randomChar);

    }
  }

  for (let i = 0; i < options.length; i++) {
    let randomIndex = Math.floor(Math.random() * possibleChar.length);
    let randomChar = possibleChar[randomIndex];
    results.push(randomChar);

  }

  return results.join('')

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function getPasswordOptions() {
//     // Variable to store length of password from user input
//     var length = parseInt(
//       prompt('How many characters would you like your password to contain?')
//     );
//     // Conditional statement to check if password length is a number. Prompts end if this evaluates false
//     if (Number.isNaN(length)) {
//       alert('Password length must be provided as a number');
//       return null;
//     }
//     // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
//     if (length < 8) {
//       alert('Password length must be at least 8 characters');
//       return null;
//     }
//     // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
//     if (length > 128) {
//       alert('Password length must less than 129 characters');
//       return null;
//     }
//     // Variable to store boolean regarding the inclusion of special characters
//     var hasSpecialCharacters = confirm(
//       'Click OK to confirm including special characters.'
//     );
//     // Variable to store boolean regarding the inclusion of numeric characters
//     // Variable to store boolean regarding the inclusion of lowercase characters
//     // Variable to store boolean regarding the inclusion of uppercase characters
//     // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
//     // Object to store user input then return that object
//   }
//   white_check_mark
//   eyes
//   raised_hands
//8:59
//This is some starter code for the challenge 3, you can add this right after you set your global variable of the character arrays
