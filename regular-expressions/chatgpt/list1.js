// ✅ Task 1: Email Validation
// Condition: The string must be a valid email address in the format username@domain.tld
// Allowed characters: letters, numbers, dots, underscores, dashes in the username and domain
let emailRegExp = /^[\w.-]+@[\w.-]+\.\w+$/i;
console.log(emailRegExp.test("user.name-99@gmail.com")); // true
console.log(emailRegExp.test("@gmail.com")); // false
console.log(emailRegExp.test("username@.com")); // false

// ✅ Task 2: Ukrainian Phone Number Validation
// Condition: The string must be in the format +380XXXXXXXXX (9 digits after +380)
let phoneRegExp = /^\+380\d{9}$/;
console.log(phoneRegExp.test("+380501234567")); // true
console.log(phoneRegExp.test("+38050123")); // false
console.log(phoneRegExp.test("380501234567")); // false
console.log(phoneRegExp.test("+38050ABC567")); // false

// ✅ Task 3: Date Validation in DD.MM.YYYY format
// Condition: The date must follow the format DD.MM.YYYY, where DD is a valid day, MM is a valid month, and YYYY is a four-digit year
let dateRegExp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
console.log(dateRegExp.test("01.01.2023")); // true
console.log(dateRegExp.test("31.12.1999")); // true
console.log(dateRegExp.test("32.01.2023")); // false
console.log(dateRegExp.test("00.01.2023")); // false
console.log(dateRegExp.test("15.13.2020")); // false

// ✅ Task 4: Password Validation
// Condition: The password must have at least 8 characters,
// including at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*)
let passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
console.log(passwordRegExp.test("Password1!")); // true
console.log(passwordRegExp.test("passw1!")); // false (no uppercase letter, too short)
console.log(passwordRegExp.test("PASS1234")); // false (no lowercase letter, no special symbol)
console.log(passwordRegExp.test("Aa1!Aa1!")); // true

// ✅ Task 5: URL Validation
// Condition: The string must be a valid URL, starting with "http://" or "https://",
// and optionally including "www.", followed by a domain, and optionally a path
let urlRegExp = /^(https?:\/\/)(www\.)?[\w-]+\.[a-z]{2,6}(\/[\w\-\.]*)?$/i;
console.log(urlRegExp.test("https://www.example.com")); // true
console.log(urlRegExp.test("http://example.com")); // true
console.log(urlRegExp.test("https://example.com/path/to/resource")); // true
console.log(urlRegExp.test("example.com")); // false (missing http:// or https://)
console.log(urlRegExp.test("https://example")); // false (missing top-level domain)

// ✅ Task 6: IP Address Validation (IPv4)
// Condition: The string must be a valid IPv4 address, with four numbers (0-255) separated by dots
let ipRegExp =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
console.log(ipRegExp.test("192.168.0.1")); // true
console.log(ipRegExp.test("256.256.256.256")); // false (numbers greater than 255)
console.log(ipRegExp.test("192.168.01.1")); // false (leading zero)
console.log(ipRegExp.test("0.0.0.0")); // true
console.log(ipRegExp.test("255.255.255.255")); // true
