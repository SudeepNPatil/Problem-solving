function selectionsort(array) {
  for (let i = 0; i < array.length; i++) {
    let minindex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minindex]) {
        minindex = j;
      }
    }

    let temp = array[i];
    array[i] = array[minindex];
    array[minindex] = temp;
  }

  return array;
}

console.log(selectionsort([1, 3, 2, 4, 8, 5, 9, 10, 7, 6]));
