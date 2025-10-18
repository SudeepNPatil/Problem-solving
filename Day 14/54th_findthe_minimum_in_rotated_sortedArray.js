function rotatedsortedarray(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] > array[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return array[left];
}

console.log(rotatedsortedarray([4, 5, 6, 1, 2, 3]));
