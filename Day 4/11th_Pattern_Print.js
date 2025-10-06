function patternPrint(str) {
  let n = str.length;
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row += str[i];
      } else if (i + j === n - 1) {
        row += str[j];
      } else {
        row += ' ';
      }
    }
    row += '\n';
  }
  return row;
}

console.log(patternPrint('welcometodsalearnings'));
