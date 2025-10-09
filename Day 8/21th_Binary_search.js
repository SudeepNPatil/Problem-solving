function binarysearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return `target found at the location : ${mid}`;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 'Not found';
}

console.log(binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
