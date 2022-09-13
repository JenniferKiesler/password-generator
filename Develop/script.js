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
function generatePassword() {
    var passwordLength = Number(prompt("Choose a password length between 8 and 128:"));
    console.log(passwordLength);
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = Number(prompt("Choose a password length between 8 and 128:"));
    }
    console.log(passwordLength);
  
  //confirm character types to use
  lower = confirm("Do you want your password to include lowercase letters?");
  console.log(lower);

  upper = confirm("Do you want your password to include uppercase letters?");
  console.log(upper);

  num = confirm("Do you want your password to include numeric characters?");
  console.log(num);

  special = confirm("Do you want your password to include special characters?");
  console.log(special);
  
  // if else for new array for password generation
  // concat to combine character types that are chosen into one array
  // var for new array
  //for loop?
    //function math.floor(math.random() * newarray.length) to determine password from new array
  var combined = "";

  for (var i = 1; i <= passwordLength; i++) {
    if (lower === true && upper === true && num === true && special === true) {
      var all = lowerCase.concat(upperCase, numbers, specialChar);
      console.log(all);
      var randomAll = all[Math.floor(Math.random() * all.length)];
      console.log(randomAll);
      combined += randomAll;
      console.log(combined);
    } else if (lower === true && upper === true && num === true && special === false) {
      var lowerUpperNum = lowerCase.concat(upperCase, numbers);
      console.log(lowerUpperNum);
    } else if (lower === true && upper === true && num === false && special === true) {
      var lowerUpperSpecial = lowerCase.concat(upperCase, specialChar);
      console.log(lowerUpperSpecial);
    } else if (lower === true && upper === false && num === true && special === true) {
      var lowerNumSpecial = lowerCase.concat(numbers, specialChar);
      console.log(lowerNumSpecial);
    } else if (lower === false && upper === true && num === true && special === true) {
      var upperNumSpecial = upperCase.concat(numbers, specialChar);
      console.log(upperNumSpecial);
    } else if (lower === false && upper === false && num === true && special === true) {
      var numSpecial = numbers.concat(specialChar);
      console.log(numSpecial);
    } else if (lower === false && upper === true && num === false && special === true) {
      var upperSpecial = upperCase.concat(specialChar);
      console.log(upperSpecial);
    } else if (lower === false && upper === true && num === true && special === false) {
      var upperNum = upperCase.concat(numbers);
      console.log(upperNum);
    } else if (lower === true && upper === false && num === false && special === true) {
      var lowerSpecial = lowerCase.concat(specialChar);
      console.log(lowerSpecial);
    } else if (lower === true && upper === false && num === true && special === false) {
      var lowerNum = lowerCase.concat(numbers);
      console.log(lowerNum);
    } else if (lower === true && upper === true && num === false && special === false) {
      var lowerUpper = lowerCase.concat(upperCase);
      console.log(lowerUpper);
    } else if (lower === true && upper === false && num === false && special === false) {
      lowerCase;
      console.log(lowerCase);
    } else if (lower === false && upper === true && num === false && special === false) {
      upperCase;
      console.log(upperCase);
    } else if (lower === false && upper === false && num === true && special === false) {
      numbers;
      console.log(numbers);
    } else if (lower === false && upper === false && num === false && special === true) {
      specialChar;
      console.log(specialChar);
    }
  }
  return combined
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
