function countkeys(param) {
  let count = 0;
  for (let key in param) {
    if (key) {
      count++;
    }
  }

  return count;
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rolnum: 120,
};

console.log(countkeys(values));
