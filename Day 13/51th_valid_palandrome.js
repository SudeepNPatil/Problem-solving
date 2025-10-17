function validpalandrome(string) {
  let left = 0;
  let right = string.length - 1;

  function isAlphaNumeric(ch) {
    return /^[a-z0-9]$/i.test(ch);
  }

  while (left < right) {
    while (left < right && !isAlphaNumeric(string[left])) left++;
    while (left < right && !isAlphaNumeric(string[right])) right--;

    if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(validpalandrome('A man, a plan, a canal: Panama'));
