//  1
// Your task is to write a function that takes a
// string and return a new string with all vowels removed.
function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, "");
  return str;
}

// 2
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
function validatePIN(pin) {
  const regExp = /^(\d{4}|\d{6})$/;
  return regExp.test(pin);
}

// 3
// Complete the function/method so that it returns the url with
// anything after the anchor (#) removed.
function removeUrlAnchor(url) {
  return url.replace(/#.*$/, "");
}

// 4
// Given a string made of digits [0-9], return a string where e
// ach digit is repeated a number of times equals to its value.
function explode(s) {
  return s.replace(/\d/g, (digit) => digit.repeat(Number(digit)));
}

// 5
// takes in a string and replaces all the vowels [a,e,i,o,u]
// with their respective positions within that string.
function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (match, offset) => offset + 1);
}

// 6
// Write a function, nicknameGenerator that takes a string name as
// an argument and returns the first 3 or 4 letters as a nickname.
// If the 3rd letter is a consonant, return the first 3 letters.
// If the 3rd letter is a vowel, return the first 4 letters.
function nicknameGenerator(name) {
  if (name.length < 4) return "Error: Name too short";
  return /[aeiou]/i.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}

// 7
//Implement the function which should return true if given object is a vowel
//(meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
String.prototype.vowel = function () {
  let regExp = /^[aeiou]$/i;
  return regExp.test(this);
};

// 8
// Given a string, return true if the first instance of "x"
// in the string is immediately followed by the string "xx".
function tripleX(str) {
  const match = str.match(/x+/gi);
  if (!match) return false;

  const firstLetterIndex = str.indexOf("x");
  return str[firstLetterIndex + 1] === "x";
}

// 9
// Complete the code which should return true if the given
// object is a single ASCII letter (lower or upper case), false otherwise.
String.prototype.isLetter = function () {
  let regExp = /^[a-z]$/i;
  return regExp.test(this);
};

// 10
// One suggestion to build a satisfactory password is to start with a memorable
// phrase or sentence and make a password by extracting the first letter of each word.
// Even better is to replace some of those letters with numbers (e.g., the letter
// O can be replaced with the number 0):
function makePassword(phrase) {
  let updatedStr = phrase
    .replace(/i/gi, "1") // Replace 'i' or 'I' with '1'
    .replace(/o/gi, "0") // Replace 'o' or 'O' with '0'
    .replace(/s/gi, "5"); // Replace 's' or 'S' with '5'

  let words = updatedStr.split(" ").map((word) => word[0]);
  return words.join("");
}
