function everageofallsubarray(array, k) {
  let sum = 0;
  let everagesum = 0;
  let result = [];
  for (let i = 0; i < k; i++) {
    sum += array[i];
  }
  everagesum = sum / k;
  result.push(everagesum);

  for (let right = k; right < array.length; right++) {
    sum += array[right] - array[right - k];
    everagesum = sum / k;
    result.push(everagesum);
  }
  return result;
}

console.log(everageofallsubarray([1, 2, 3, 4, 5], 2));
