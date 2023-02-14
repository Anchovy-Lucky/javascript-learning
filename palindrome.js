function isAlphanumeric(str) {
    return str.length === 1 && str.match(/[a-z0-9]/gi);
  }
  function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isAlphanumeric(str[i])) {
        str = str.replace(str[i], "");
        i--;
      }
    }
    str = str.toLowerCase();
    let stringEnd = "";
    for (let i = str.length - 1; i >= (str.length / 2); i--) {
      stringEnd += str[i];
    }
    let iterateCount = (str.length / 2);
    if ((str.length / 2) > stringEnd.length) {
      iterateCount = stringEnd.length;
    }
    for (let i = 0; i < iterateCount; i++) {
      if (str[i] !== stringEnd[i]) {
        return false;
      }
    }
    return true;
  }
let testString = "1 eye for of 1 eye.";
console.log(palindrome(testString));