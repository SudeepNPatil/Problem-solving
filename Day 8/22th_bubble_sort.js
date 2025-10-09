function bubblesort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return array;
}

console.log(bubblesort([1, 4, 6, 2, 5, 8, 9, 3, 10, 7]));
