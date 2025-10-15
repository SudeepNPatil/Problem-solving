function cloneobject(object) {
  let newobject = {};

  for (let key in object) {
    newobject[key] = object[key];
  }

  return newobject;
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
newobj = cloneobject(values);

newobj.someother = 'values';
newobj.course[3] = 'somesome';

console.log(newobj);

console.log(values);
