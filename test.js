function reversearray(arr) {
  let start = 0;
  let end = arr.length - 1; // Fixing the off-by-one issue
  
  while (start < end) { // Fixing the syntax error
    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move pointers
    start++;
    end--;
  }
  return arr;
}

// Testing the function
let arr = [1, 2, 3, 4, 5];
console.log(reversearray(arr)); // Output: [5, 4, 3, 2, 1]
