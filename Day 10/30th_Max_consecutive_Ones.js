function maxMaxconsecutiveOnes(array) {
  let count = 0;
  let maxcount = 0;

  for (let num of array) {
    if (num === 1) {
      count++;
      maxcount = Math.max(maxcount, count);
    } else {
      count = 0;
    }
  }

  return maxcount;
}

console.log(maxMaxconsecutiveOnes([0, 1, 1, 0, 1, 1, 1]));
