function Singleelement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(Singleelement([2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8]));
