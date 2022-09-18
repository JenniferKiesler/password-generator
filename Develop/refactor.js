// Assignment code here
// array for character type lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCase);

// array for character type uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCase);

// array for character type numeric
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// array for character type special characters
var specialChar = ["!", "#", "$", "%", "&", "'", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];
console.log(specialChar);

function getUserOptions() {
   var passwordLength = Number(prompt("Choose a password length between 8 and 128:"));
    console.log(passwordLength);
    // while loop until length is entered correctly
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Input is not valid. Enter a number between 8 and 128.");
        passwordLength = Number(prompt("Choose a password length between 8 and 128:"));
      }
    }
    console.log(passwordLength);
  
  //confirm character types to use
  lower = confirm("Do you want your password to include lowercase letters?");
  console.log(lower);

  upper = confirm("Do you want your password to include uppercase letters?");
  console.log(upper);

  num = confirm("Do you want your password to include numbers?");
  console.log(num);

  special = confirm("Do you want your password to include special characters?");
  console.log(special);

  if (!lower && !upper && !num && !special) {
      alert("At least one character type (lowercase, uppercase, numbers, or special characters) must be selected!");
      getUserOptions()
  }
  
  return {
    passwordLength,
    lower,
    upper,
    num,
    special,
  }
}

function getRandomCharacters({
  passwordLength,
  lower,
  upper,
  num,
  special,
}) {
  var possibleCharacters = []
  if (lower) possibleCharacters = [...possibleCharacters, ...lowerCase]
  if (upper) possibleCharacters = [...possibleCharacters, ...upperCase]
  if (num) possibleCharacters = [...possibleCharacters, ...numbers]
  if (special) possibleCharacters = [...possibleCharacters, ...specialChar]

  var newPassword = ""
  for (var i = 1; i <= passwordLength; i++) {
    var randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    newPassword += randomCharacter
  }
  return newPassword
}


function generatePassword() {
  var userOptions = getUserOptions()
  console.log(userOptions)
  var generatedPassword = getRandomCharacters(userOptions)
  return generatedPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
