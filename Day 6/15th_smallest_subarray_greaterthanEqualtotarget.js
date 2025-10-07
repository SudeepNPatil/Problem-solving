function smallestsubarray(target, nums) {
  let left = 0,
    sum = 0,
    minlen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minlen = Math.min(minlen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minlen === Infinity ? 0 : minlen;
}

console.log(smallestsubarray(7, [1, 2, 3, 4, 5, 6]));
