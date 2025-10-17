function longestcommanprifix(strs) {
  if (strs.length === 0) {
    return '';
  }

  let prifix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prifix) !== 0) {
      prifix = prifix.slice(0, prifix.length - 1);
    }

    if (prifix === '') {
      return '';
    }
  }

  return prifix;
}

console.log(longestcommanprifix(['flower', 'flow', 'flight']));
