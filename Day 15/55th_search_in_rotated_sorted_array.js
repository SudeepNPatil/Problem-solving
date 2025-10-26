function searchinrotatedsortedarray(nums, target) {
  let first = 0;
  let last = nums.length - 1;

  if (nums.length === 0) return -1;

  if (nums.length === 1 && target === nums[0]) {
    return 0;
  }

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[first] <= nums[mid]) {
      if (target >= nums[first] && target <= nums[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }

  return -1;
}

console.log(searchinrotatedsortedarray([5, 1, 3], 3));
