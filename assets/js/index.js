var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charsArray = [];

  var pwLength = prompt("Total length?");
  if ((pwLength != 8, 128)) {
  }

  if (window.confirm("Include lowercase?")) {
    charsArray.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (window.confirm("Include uppercase?")) {
    charsArray.push("ABCDEFGHIJKLMNOPQRSTUVWXY");
  }
  if (window.confirm("Include numbers?")) {
    charsArray.push("123456789");
  }
  if (window.confirm("Include symbols?")) {
    charsArray.push("!@#%^&*+=-");
  }

  let chars = charsArray.toString();
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
