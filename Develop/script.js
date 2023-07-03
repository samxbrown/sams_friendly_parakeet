// Assignment code here
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "12345678910";
var specialCharacers = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Added the function generate password, then created a while loop so that the user will have to submit the accurate value
// Added variables to prompt follow-up questions for inclusion of characters
function generatePassword() {
  var allCharacters = ""
  var passwordLength = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"))
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
    passwordLength = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Added IF statements to function to validate user selection and if it meets the condition the characters will be added to the pool of all characters
  // If condition is not met, the characters will not be added to the random password
  if (includeLowercase === true) {
    allCharacters += lowercaseCharacters
  }

  if (includeUppercase === true) {
    allCharacters += uppercaseCharacters
  }

  if (includeNumbers === true) {
    allCharacters += numbers
  }

  if (includeSpecial === true) {
    allCharacters += specialCharacers
  }

  // For loop to generate random characters using the Math.floor/Math.random functions until it reaches the password length desired
  var randomPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
// return generates random password
  return randomPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);