function deepcopy(object) {
  const newobj = {};

  for (let key in object) {
    if (
      typeof object[key] === 'string' ||
      typeof object[key] === 'number' ||
      typeof object[key] === 'boolean' ||
      object[key] === null
    ) {
      newobj[key] = object[key];
    } else if (Array.isArray(object[key])) {
      newobj[key] = [];
      object[key].map((item) => {
        newobj[key].push(item);
      });
    } else if (typeof object[key] === 'object') {
      let subobj = object[key];
      newobj[key] = {};
      for (let key1 in subobj) {
        newobj[key][key1] = subobj[key1];
      }
    }
  }

  return newobj;
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

let newobj = deepcopy(values);

newobj.sub.somevaluee = 'test';
newobj.course[3] = 'test';

console.log(newobj);

console.log(values);
