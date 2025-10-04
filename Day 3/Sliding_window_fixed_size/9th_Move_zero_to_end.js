function movezero(array) {
  let movezero = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[movezero] = array[i];
      movezero++;
    }
  }

  while (movezero < array.length) {
    array[movezero] = 0;
    movezero++;
  }

  return array;
}

console.log(movezero([0, 1, 5, 0, 2, 5, 0, 2]));
