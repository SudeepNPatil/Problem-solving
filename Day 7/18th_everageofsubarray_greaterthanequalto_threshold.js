function greaterthaneverage(array, k, threshold) {
  let sum = 0,
    everage = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  everage = sum / k;
  if (everage >= threshold) {
    count++;
  }

  for (let right = k; right < array.length; right++) {
    sum += array[right] - array[right - k];
    everage = sum / k;
    if (everage >= threshold) {
      count++;
    }
  }
  return count;
}
console.log(greaterthaneverage([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6));
