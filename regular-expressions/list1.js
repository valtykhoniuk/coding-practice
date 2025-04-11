// kata 1. 7 kyu
// Your task is to write a function that takes a
// string and return a new string with all vowels removed.
function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, "");
  return str;
}

// kata 3. 7 kyu
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
function validatePIN(pin) {
  const regExp = /^(\d{4}|\d{6})$/;
  return regExp.test(pin);
}

// kata 4. 7 kyu
// Complete the function/method so that it returns the url with
// anything after the anchor (#) removed.
function removeUrlAnchor(url) {
  return url.replace(/#.*$/, "");
}

//kata 5. 7 kyu
// Given a string made of digits [0-9], return a string where e
// ach digit is repeated a number of times equals to its value.
function explode(s) {
  return s.replace(/\d/g, (digit) => digit.repeat(Number(digit)));
}

// kata 6. 7 kyu
// takes in a string and replaces all the vowels [a,e,i,o,u]
// with their respective positions within that string.
function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (match, offset) => offset + 1);
}
