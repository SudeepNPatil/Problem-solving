function mergetwoarray(array1, array2) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i++]);
    } else {
      result.push(array2[j++]);
    }
  }

  while (i < array1.length) result.push(array1[i++]);
  while (j < array2.length) result.push(array2[j++]);

  return result;
}

console.log(mergetwoarray([1, 2, 3, 10], [5, 6, 7, 8]));
