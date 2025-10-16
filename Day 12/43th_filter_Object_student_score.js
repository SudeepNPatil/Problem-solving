// Q. Given an object of student scores, return only students who scored above 80.

function filteringobject(object) {
  for (let key in object) {
    for (let key1 in object[key]) {
      if (object[key][key1] > 80) {
        console.log(object[key]);
      }
    }
  }

  return;
}

let values = {
  studet1: {
    name: 'jhon',
    age: 23,
    score: 99,
  },
  studet2: {
    name: 'kar',
    age: 25,
    score: 20,
  },
  studet3: {
    name: 'mar',
    age: 23,
    score: 80,
  },
  studet4: {
    name: 'ji',
    age: 23,
    score: 89,
  },
  studet5: {
    name: 'jhon',
    age: 23,
    score: 60,
  },
  studet6: {
    name: 'kgf',
    age: 23,
    score: 98,
  },
  studet7: {
    name: 'rrr',
    age: 23,
    score: 100,
  },
  studet8: {
    name: 'man',
    age: 23,
    score: 75,
  },
};

console.log(filteringobject(values));
