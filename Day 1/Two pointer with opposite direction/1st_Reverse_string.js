function reverse_string(array) {
  let start = 0;
  let end = array.length - 1;
  let temp;

  while (start < end) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  return array;
}

console.log(reverse_string(['h', 'e', 'l', 'l', 'o']));
