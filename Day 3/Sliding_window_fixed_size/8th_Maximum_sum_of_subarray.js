function maximum_sum(array, size) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < size; i++) {
    sum = sum + array[i];
  }
  max = sum;
  for (let j = size; j < array.length; j++) {
    sum = sum + array[j] - array[j - size];

    max = Math.max(max, sum);
  }

  return max;
}

console.log(maximum_sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

console.log(maximum_sum([2, 1, 5, 1, 3, 2], 3));
