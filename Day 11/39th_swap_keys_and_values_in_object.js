function swapkeysandvalues(object) {
  const newobj = {};
  for (let key in object) {
    newobj[object[key]] = key;
  }

  return newobj;
}

const obj1 = {
  name: 'sudeep',
  age: 23,
  isstudent: true,
  course: 'MCA',
};

console.log(swapkeysandvalues(obj1));
