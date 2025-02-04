function reverseobj(object){

    let reverse = {};

  for(let key in object){

    reverse[object[key]] = key;

  }
  return reverse;

}

let obj= { d: "dev", o: "origin", do: "devorigin" }

console.log(reverseobj(obj));