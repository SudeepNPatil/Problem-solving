function firstnegative(array, k) {
  let result = [];

  for (let count = 0; count <= array.length - k; count++) {
    let isnegative = false;
    for (let j = count; j < count + k; j++) {
      if (array[j] < 0) {
        result.push(array[j]);
        isnegative = true;
        break;
      }
    }

    if (!isnegative) {
      result.push(0);
    }
  }

  return result;
}

console.log(firstnegative([12, -1, -7, 8, -15, 30, 16, 28], 3));
