function subarray(array, target) {
  let left = 0,
    sum = 0;

  for (let right = 0; right < array.length; right++) {
    sum += array[right];

    while (sum > target) {
      sum -= array[left];
      left++;
    }

    if (sum === target) {
      return [left, right];
    }
  }

  return [];
}

console.log(subarray([1, 2, 3, 7, 5], 13));
