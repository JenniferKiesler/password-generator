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

// var for password length
// number(prompt(choose length of password between 8 and 128))
var passwordLength = Number(prompt("Choose a password length between 8 and 128:"));
console.log(passwordLength);

//confirm character types to use

// if else for new array for password generation
  // concat to combine character types that are chosen into one array
  // var for new array

//for loop?
  //function math.floor(math.random() * newarray.length) to determine password from new array

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
