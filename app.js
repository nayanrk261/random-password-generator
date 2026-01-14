const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const LENGTH = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*(){}<>:";

const allChars = upperCase + lowerCase + numbers + symbols;

function getRandomChar(str) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return str[array[0] % str.length];
}

function shufflePassword(password) {
  const arr = password.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function createPassword() {
  let password = "";

  password += getRandomChar(upperCase);
  password += getRandomChar(lowerCase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);

  while (password.length < LENGTH) {
    password += getRandomChar(allChars);
  }

  passwordBox.value = shufflePassword(password);
}

function copyPassword() {
  if (!passwordBox.value) return;
  navigator.clipboard.writeText(passwordBox.value);
}

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyPassword);
