function sortobjectbykey(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }

  function bubblesort(keys) {
    for (let i = 0; i < keys.length; i++) {
      let iswaped = false;
      for (let j = 0; j < keys.length - i; j++) {
        if (keys[j] > keys[j + 1]) {
          let temp = keys[j];
          keys[j] = keys[j + 1];
          keys[j + 1] = temp;
          iswaped = true;
        }
      }
      if (!iswaped) {
        return keys;
      }
    }
    return keys;
  }

  let sorted = bubblesort(keys);
  const sortedobject = {};
  for (let i = 0; i < sorted.length; i++) {
    sortedobject[sorted[i]] = object[sorted[i]];
  }

  return sortedobject;
}

let values = {
  b: 1,
  c: 2,
  a: 3,
  d: 4,
};

console.log(sortobjectbykey(values));
