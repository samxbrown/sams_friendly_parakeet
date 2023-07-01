// Assignment code here
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "12345678910";
var specialCharacers = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var includeLowercase = ("Include lowercase characters?");
var includeUppercase = ("Include uppercase characters?");
var includeNumbers = ("Include numeric characters?");
var includeSpecial = ("Include special characters?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"))
while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) 
  passwordLength = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
