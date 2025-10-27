function sqrtX(x) {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

console.log(sqrtX(10));
