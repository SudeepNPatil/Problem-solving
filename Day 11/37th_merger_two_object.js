function meargetwo(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = {
  name: 'sudeep',
  age: 23,
  isstudent: true,
  course: 'MCA',
};

const obj2 = {
  college: 'AMC',
  location: 'bengalore',
  marrid: 'Not yet',
};

console.log(meargetwo(obj1, obj2));
