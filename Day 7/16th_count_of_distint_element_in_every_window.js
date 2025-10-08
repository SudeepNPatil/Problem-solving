function countofdistientelement(array, k) {
  let left = 0;
  let count = 0;
  let result = [];

  while (count <= array.length - k) {
    let set = new Set();

    for (let right = count; right < count + k; right++) {
      if (!set.has(array[right])) {
        set.add(array[right]);
      }
    }

    result.push(set.size);

    count++;
  }

  return result;
}

console.log(countofdistientelement([1, 2, 1, 3, 4, 2, 3], 4));
