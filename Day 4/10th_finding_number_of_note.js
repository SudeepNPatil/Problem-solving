function findnumberofnote(amount) {
  array = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let numberofnotes;
  for (let i = 0; i < array.length; i++) {
    numberofnotes = Math.floor(amount / array[i]);
    amount = amount % array[i];

    console.log(`\n number of ${array[i]} notes are :${numberofnotes}`);
  }
}

findnumberofnote(41585);
