function filterobject(object) {
  let string = [];
  let num = [];
  let rest = [];

  for (let key in object) {
    if (typeof object[key] === 'string') {
      string.push(key);
    } else if (typeof object[key] === 'number') {
      num.push(key);
    } else {
      rest.push(key);
    }
  }

  console.log(string);
  console.log(num);
  console.log(rest);
}

let values = {
  name: 'jhon',
  age: 24,
  isstudent: true,
  rollnum: null,
  course: 'MCA',
  sub: {
    some: 'some',
    not: 'notsum',
  },
  amount: 100,
};

filterobject(values);
