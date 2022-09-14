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

  num = confirm("Do you want your password to include numbers?");
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
      var randomLowerUpperNum = lowerUpperNum[Math.floor(Math.random() * lowerUpperNum.length)];
      console.log(randomLowerUpperNum);
      combined += randomLowerUpperNum;
      console.log(combined);

    } else if (lower === true && upper === true && num === false && special === true) {
      var lowerUpperSpecial = lowerCase.concat(upperCase, specialChar);
      console.log(lowerUpperSpecial);
      var randomLowerUpperSpecial = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
      console.log(randomLowerUpperSpecial);
      combined += randomLowerUpperSpecial;
      console.log(combined);

    } else if (lower === true && upper === false && num === true && special === true) {
      var lowerNumSpecial = lowerCase.concat(numbers, specialChar);
      console.log(lowerNumSpecial);
      var randomLowerNumSpecial = lowerNumSpecial[Math.floor(Math.random() * lowerNumSpecial.length)];
      console.log(randomLowerNumSpecial);
      combined += randomLowerNumSpecial;
      console.log(combined);

    } else if (lower === false && upper === true && num === true && special === true) {
      var upperNumSpecial = upperCase.concat(numbers, specialChar);
      console.log(upperNumSpecial);
      var randomUpperNumSpecial = upperNumSpecial[Math.floor(Math.random() * upperNumSpecial.length)];
      console.log(randomUpperNumSpecial);
      combined += randomUpperNumSpecial;
      console.log(combined);

    } else if (lower === false && upper === false && num === true && special === true) {
      var numSpecial = numbers.concat(specialChar);
      console.log(numSpecial);
      var randomNumSpecial = numSpecial[Math.floor(Math.random() * numSpecial.length)];
      console.log(randomNumSpecial);
      combined += randomNumSpecial;
      console.log(combined);

    } else if (lower === false && upper === true && num === false && special === true) {
      var upperSpecial = upperCase.concat(specialChar);
      console.log(upperSpecial);
      var randomUpperSpecial = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
      console.log(randomUpperSpecial);
      combined += randomUpperSpecial;
      console.log(combined);

    } else if (lower === false && upper === true && num === true && special === false) {
      var upperNum = upperCase.concat(numbers);
      console.log(upperNum);
      var randomUpperNum = upperNum[Math.floor(Math.random() * upperNum.length)];
      console.log(randomUpperNum);
      combined += randomUpperNum;
      console.log(combined);

    } else if (lower === true && upper === false && num === false && special === true) {
      var lowerSpecial = lowerCase.concat(specialChar);
      console.log(lowerSpecial);
      var randomLowerSpecial = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
      console.log(randomLowerSpecial);
      combined += randomLowerSpecial;
      console.log(combined);

    } else if (lower === true && upper === false && num === true && special === false) {
      var lowerNum = lowerCase.concat(numbers);
      console.log(lowerNum);
      var randomLowerNum = lowerNum[Math.floor(Math.random() * lowerNum.length)];
      console.log(randomLowerNum);
      combined += randomLowerNum;
      console.log(combined);

    } else if (lower === true && upper === true && num === false && special === false) {
      var lowerUpper = lowerCase.concat(upperCase);
      console.log(lowerUpper);
      var randomLowerUpper = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
      console.log(randomLowerUpper);
      combined += randomLowerUpper;
      console.log(combined);

    } else if (lower === true && upper === false && num === false && special === false) {
      lowerCase;
      console.log(lowerCase);
      var randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      console.log(randomLower);
      combined += randomLower;
      console.log(combined);

    } else if (lower === false && upper === true && num === false && special === false) {
      upperCase;
      console.log(upperCase);
      var randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
      console.log(randomUpper);
      combined += randomUpper;
      console.log(combined);

    } else if (lower === false && upper === false && num === true && special === false) {
      numbers;
      console.log(numbers);
      var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
      console.log(randomNum);
      combined += randomNum;
      console.log(combined);

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
