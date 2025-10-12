function missingnumber(array) {
  let n = array.length;
  let expectedsum = (n * (n + 1)) / 2;
  let actualsum = 0;

  for (let num of array) {
    actualsum += num;
  }

  return expectedsum - actualsum;
}

console.log(missingnumber([0, 2, 3, 4, 5, 6, 7]));
