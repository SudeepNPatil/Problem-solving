function findtypeofvalue(values) {
  for (let key in values) {
    if (typeof values[key] === 'string') {
      values[key] = typeof values[key];
    } else if (typeof values[key] === 'number') {
      values[key] = 'number';
    } else if (Array.isArray(values[key])) {
      values[key] = 'Array';
    } else if (typeof values[key] === 'boolean') {
      values[key] = 'boolean';
    } else if (values[key] === null) {
      values[key] = 'null values';
    } else if (typeof values[key] === 'object') {
      values[key] = 'object';
    } else {
      values[key] = undefined;
    }
  }

  return values;
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rollnum: null,
  course: ['java', 'javascript', '12'],
  sub: {
    some: 'some',
    not: 'notsum',
  },
  ishe: '',
};

console.log(findtypeofvalue(values));
