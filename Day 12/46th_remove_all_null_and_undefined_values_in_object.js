function removenullandundefinedvalue(object) {
  for (let key in object) {
    if (object[key] === null || object[key] === undefined) {
      delete object[key];
    }
  }
  return object;
}

let values = {
  name: 'sudeep',
  age: 23,
  isgood: undefined,
  song: null,
  some: 'hii',
  values: 121,
};

console.log(removenullandundefinedvalue(values));
