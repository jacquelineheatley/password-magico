// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let mainArray = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXY",
    "123456789",
    "!@#%^&*+=-",
  ];
    

  let password = "";


  let pwLength = prompt("How long is your password");
  if (pwLength < 8) {
    console.log("pwLength = ", pwLength);
    alert("not enough");
  }
    
  let lower = prompt("Lowercase letters?");
  if (!lower) {
    // The pop method removes the last element in the array
    mainArray.pop();
    // The original array is changed
    console.log(mainArray);
  }

  let upper = prompt("Uppercase letters?");
  if (!upper) {
    // The pop method removes the last element in the array
    mainArray.pop();
    // The original array is changed
    console.log(mainArray);
  }

  let numbers = prompt("Include numbers?");
  if (!numbers) {
    // The pop method removes the last element in the array
    mainArray.pop();
    // The original array is changed
    console.log(mainArray);
  }

  let symbols = prompt("Include symbols?");
  if (!symbols) {
    // The pop method removes the last element in the array
    mainArray.pop();
    // The original array is changed
    console.log(mainArray);
  }
    // let pwLength = passLength; 
  let chars = mainArray.toString;

  for (let i = 0; i < passLength; i++)
    password += chars[Math.floor(Math.random() * chars.length)];
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
