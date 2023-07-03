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

function generatePassword() {
  var allCharacters = ""
  var passwordLength = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"))
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
    passwordLength = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if(includeLowercase === true) {
    allCharacters += lowercaseCharacters
    console.log(allCharacters)
  }

  if(includeUppercase === true) {
    allCharacters += uppercaseCharacters
    console.log(allCharacters)
  }

  if(includeNumbers === true) {
    allCharacters += numbers
    console.log(allCharacters)
  }

  if(includeSpecial === true) {
    allCharacters += specialCharacers
    console.log(allCharacters)
  }
var randomPassword = ""
for(var i = 0; i < passwordLength; i++) {
randomPassword += allCharacters[Math.floor(Math.random()*allCharacters.length)];
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);