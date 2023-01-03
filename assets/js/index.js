// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    const mainArray = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "%", "^", "&", "*", "+", "-", "="
    ]
    // control flow
    // get parameters from the user and validate them using if statements
    var pwLength = prompt("How long is your password");
    if (pwLength < 8) {
        console.log("pwLength = ", pwLength);
        alert("not enough");
        // generatePassword();
    }

    var lower = prompt("Lowercase letters?");
    if (lower) {
        // let lower = generatePassword();
        // console.log("lower = ", lower);
        let lower = mainArray.push([26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);
    }

    var upper = prompt("Uppercase letters?");
    if (!upper) {
        // let upper = generatePassword();
        // console.log("upper = ", upper);
        let upper = mainArray.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    }

    var numbers = prompt("Include numbers?");
    if (!numbers) {
        // let numbers = generatePassword();
        // console.log("numbers = ", numbers);
        let numbers = mainArray.push([51, 52, 53, 54, 55, 56, 57, 58, 59]);
    }

    var symbols = prompt("Include symbols?");
    if (!symbols) {
        // let symbols = generatePassword();
        // console.log("symbols = ", symbols);
        let symbols = mainArray.push([60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]);
    }

let chars = mainArray;
  let passLength = pwLength;
  let password = "";

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
