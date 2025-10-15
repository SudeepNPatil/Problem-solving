function printkeysvalues(param) {
  console.log('keys\t values\n');
  for (let key in param) {
    console.log(`${key}\t ${values[key]}\n`);
  }
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rolnum: 120,
};

printkeysvalues(values);
