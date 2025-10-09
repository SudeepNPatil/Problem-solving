function mergesort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergesort(array.slice(0, mid));
  let right = mergesort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergesort([4, 5, 3, 6, 2, 8, 1, 9]));
