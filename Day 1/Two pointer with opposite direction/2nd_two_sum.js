function twosum(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === target) {
      return [array[start], array[end]];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}

console.log(twosum([1, 2, 3, 4, 5, 6, 7, 8], 10));
