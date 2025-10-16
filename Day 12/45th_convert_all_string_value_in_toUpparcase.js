function converttouppercase(object) {
  for (let key in object) {
    if (typeof object[key] === 'string') {
      object[key] = object[key].toUpperCase();
    }
  }

  return object;
}

let values = {
  name: 'sudeep',
  age: 23,
  course: 'mca',
  college: 'amcengineering college',
  stay: 'hostal',
  rollnum: 58,
};

console.log(converttouppercase(values));
