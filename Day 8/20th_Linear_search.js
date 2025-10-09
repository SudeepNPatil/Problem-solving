function linearsearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `Target is found at the location : ${i}`;
    }
  }
  return 'Not found';
}

console.log(linearsearch([1, 2, 3, 5, 2, 8, 1, 2, 9, 10], 8));
