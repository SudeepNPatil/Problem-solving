// 11] Find all keys that have numeric values greater than a given number.

function findnumaric(object, numeric) {
  let searched = [];
  for (let key in object) {
    if (typeof object[key] === 'number') {
      if (object[key] > numeric) {
        searched.push(key);
      }
    } else if (Array.isArray(object[key])) {
      object[key].map((item, index) => {
        if (typeof item === 'object') {
          for (let key2 in item) {
            if (typeof item[key2] === 'number' && item[key2] > numeric) {
              searched.push(key2);
            }
          }
        } else if (typeof item === 'number') {
          if (item > numeric) {
            searched.push(index);
          }
        }
      });
    } else {
      for (let key1 in object[key]) {
        if (typeof object[key][key1] === 'number') {
          if (object[key][key1] > numeric) {
            searched.push(key1);
          }
        }
      }
    }
  }

  return searched;
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

console.log(findnumaric(values, 25));
