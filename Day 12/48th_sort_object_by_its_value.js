function sortbyvalue(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }

  function bubblesort(values) {
    for (let i = 0; i < values.length; i++) {
      let isswaped = false;
      for (let j = 0; j < values.length - i; j++) {
        if (values[j] > values[j + 1]) {
          let temp = values[j];
          values[j] = values[j + 1];
          values[j + 1] = temp;
          isswaped = true;
        }
      }
      if (!isswaped) {
        return values;
      }
    }
    return values;
  }

  let sortedvalues = bubblesort(values);

  const sortedobject = {};
  for (let i = 0; i < sortedvalues.length; i++) {
    for (let key in object) {
      if (object[key] === sortedvalues[i]) {
        sortedobject[key] = sortedvalues[i];
      }
    }
  }

  return sortedobject;
}

let values = {
  b: 2,
  c: 3,
  a: 1,
  d: 4,
};

console.log(sortbyvalue(values));
