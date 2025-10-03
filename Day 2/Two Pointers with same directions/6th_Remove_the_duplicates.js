// brute force method
function removeduplicates_using_brute_force(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let isduplicates = false;

    for (let j = 0; j <= result.length; j++) {
      if (array[i] === result[j]) {
        isduplicates = true;
        break;
      }
    }
    if (!isduplicates) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(removeduplicates_using_brute_force([1, 2, 2, 1, 4, 5, 6, 4, 5]));

// only works on sorted array

function removeduplicates(array) {
  let left = 0;

  for (let right = 1; right < array.length; right++) {
    if (array[left] !== array[right]) {
      left++;
      array[left] = array[right];
    }
  }
  return array.slice(0, left + 1);
}

console.log(removeduplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));

// for unsorted array with

function removeduplicatesfromunsorted(nums) {
  let seen = new Set();
  let result = [];

  for (let num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;
}

console.log(removeduplicatesfromunsorted([2, 4, 1, 8, 10, 4, 1, 3, 5, 8, 6]));
