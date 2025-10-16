function findnumaric(object) {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === 'number') {
      sum += object[key];
    } else if (Array.isArray(object[key])) {
      object[key].map((item, index) => {
        if (typeof item === 'object') {
          for (let key2 in item) {
            if (typeof item[key2] === 'number') {
              sum += item[key2];
            }
          }
        } else if (typeof item === 'number') {
          sum += item;
        }
      });
    } else {
      for (let key1 in object[key]) {
        if (typeof object[key][key1] === 'number') {
          sum += object[key][key1];
        }
      }
    }
  }

  return sum;
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rollnum: null,
  course: ['java', 'javascript', 38],
  sub: {
    sum: 50,
    not: 15,
    total: 100,
    fine: 'not',
  },
  ishe: '',
};

console.log(findnumaric(values));
