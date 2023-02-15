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
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
}
let testString = "_eye";
console.log(palindrome(testString));