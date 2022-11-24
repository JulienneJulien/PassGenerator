// PROMPTING THE USER WITH PASSWORD CRITERIA. // Minimum 8 characters and Maximum 128 characters.
var charLength = 8 - 128;
console.log(charLength);

var selectedChoice = [];
console.log(selectedChoice);

// ARRAY OF OPTIONS FOR COMPUTER TO PICK FROM
var charLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  
console.log(charLowercase); 

var charUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];   
console.log(charUppercase);

var charNumeric = ['0','1','2','3','4','5','6','7','8','9'];   
console.log(charNumeric);

var charSpecialchar = ['*','+','-','/','@','?',':','=','/','#'];
console.log(charSpecialchar);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromptsEntered = userPrompts();
  var passwordText = document.querySelector("#password");
 

  if (correctPromptsEntered) {
    var createdPassword = generatePassword();
    passwordText.value = createdPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
      var randomChar = Math.floor(Math.random() * selectedChoice.length);
      password = password + selectedChoice[randomChar];
  }
  return password;
}

function userPrompts() {
  userPrompts = [];

  charLength = (prompt("How many characters do you wish to add as your password? (8 - 128 characters)"));
// COMPARISON OPERATORS ADDED
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
 alert("The length of your character must be numeric,minimum of 8 and maximum of 128 digits. Please retry.");
  return false;
}

if (confirm("Would you like to include any lowercase letters in your requested password?")) {
  selectedChoice = selectedChoice.concat(charLowercase);
}
if (confirm("Would you like to include any uppercase letters in your requested password?")) {
  selectedChoice = selectedChoice.concat(charUppercase);
}
if (confirm("Would you like to include any numeric digits in your requested password?")) {
  selectedChoice = selectedChoice.concat(charNumeric);
}
if (confirm("Would you like to include any special characters in your requested password?")) {
  selectedChoice = selectedChoice.concat(charSpecialchar);
}
return true; 
}
