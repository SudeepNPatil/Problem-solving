function singlenumber(array) {
  let result = 0;
  for (let num of array) {
    result = result ^ num;
  }
  return result;
}

console.log(singlenumber([1, 2, 3, 1, 2, 3, 4]));
