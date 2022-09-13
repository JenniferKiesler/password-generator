// Assignment code here
// array for character type lowercase
// array for character type uppercase
// array for character type numeric
// array for character type special characters

// var for password length
// number(prompt(choose length of password between 8 and 128))

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
