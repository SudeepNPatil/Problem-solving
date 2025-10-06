function firstnegativewindow(arr, k) {
  let result = [];
  let negative = [];

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (arr[right] < 0) {
      negative.push(arr[right]);
    }

    if (right - left + 1 === k) {
      result.push(negative.length > 0 ? negative[0] : 0);

      if (arr[left] === negative[0]) {
        negative.shift();
      }
      left++;
    }
    right++;
  }

  return result;
}

console.log(firstnegativewindow([12, -1, -7, 8, -15, 30, 16, 28], 3));
