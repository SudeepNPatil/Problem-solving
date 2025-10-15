function findkey(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }

  return 'not found';
}

const obj1 = {
  name: 'sudeep',
  age: 23,
  isstudent: true,
  course: 'MCA',
};

console.log(findkey(obj1, 23));
