function countproperties(object) {
  let count = 0;
  for (let key in object) {
    if (
      typeof object[key] !== 'number' &&
      typeof object[key] !== 'string' &&
      object[key] !== 'null' &&
      !Array.isArray(object[key])
    ) {
      for (let key1 in object[key]) {
        count++;
      }
    }
  }

  return count;
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rollnum: null,
  course: { java: 'java', javascript: 'javascript' },
  sub: {
    some: 'some',
    not: 'notsum',
  },
  ishe: '',
};

console.log(countproperties(values));
