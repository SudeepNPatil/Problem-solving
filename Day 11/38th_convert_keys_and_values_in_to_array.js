function convertkeys(object) {
  const keys_of_an_object = [];
  const values_of_an_object = [];

  for (let key in object) {
    keys_of_an_object.push(key);
    values_of_an_object.push(object[key]);
  }

  return [keys_of_an_object, values_of_an_object];
}

const obj1 = {
  name: 'sudeep',
  age: 23,
  isstudent: true,
  course: 'MCA',
};

console.log(convertkeys(obj1));
