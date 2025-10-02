function sortedsquar(array) {
  let left = 0;
  let right = array.length - 1;
  let pos = array.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      result[pos] = array[left] ** 2;
      pos--;
      left++;
    } else {
      result[pos] = array[right] ** 2;
      pos--;
      right--;
    }
  }

  return result;
}

console.log(sortedsquar([-4, -5, -1, 0, 11, 12, 13]));
