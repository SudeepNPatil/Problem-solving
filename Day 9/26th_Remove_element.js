function removeelement(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

console.log(removeelement([1, 2, 8, 4, 5, 6, 8, 8], 8));
