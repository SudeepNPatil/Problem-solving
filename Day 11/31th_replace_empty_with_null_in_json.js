let values = {
  first_name: 'John',
  last_name: 'Doe',
  some: '',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: '',
    zip: '12345',
  },
  addresses: [
    {
      street: '456 Main St',
      city: '',
      state: 'NY',
      zip: '54321',
    },
  ],
};

function replace(values) {
  for (let key in values) {
    if (typeof values[key] === 'string') {
      if (values[key] === '') {
        values[key] = null;
      }
    } else if (Array.isArray(values[key])) {
      values[key].map((item) => {
        for (let key1 in item) {
          if (item[key1] === '') {
            item[key1] = null;
          }
        }
      });
    } else {
      for (let key2 in values[key]) {
        if (values[key][key2] === '') {
          values[key][key2] = null;
        }
      }
    }
  }

  return values;
}

console.log(replace(values));
