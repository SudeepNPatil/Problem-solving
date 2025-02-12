/* function object_to_array(myobject){
    let array =[];  
  
    for (let key in myobject){

        let pair = [key,myobject[key]];

        array.push(pair);
    }
    
   
    return array;   
}

let obj={d:"dev",o:"origin",C:"saqib"};

console.log(object_to_array(obj)); */


function object_to_array(myobject) {
    let array = [];
  
    for (let key in myobject) {
        array.push([key, myobject[key]]);
      //array.push(pair);
    }
  
    return array;
  }
  
  let obj = { d: "dev", o: "origin", C: "saqib" };
  
  console.log(object_to_array(obj));


