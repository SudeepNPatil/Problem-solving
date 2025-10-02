function mostwater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxarea = 0;

  while (left < right) {
    let width = right - left;
    let area = Math.min(height[left], height[right]) * width;

    maxarea = Math.max(maxarea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxarea;
}

console.log(mostwater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
