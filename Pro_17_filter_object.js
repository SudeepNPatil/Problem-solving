function filter_object(obj){
    let object={};
    for(let key in obj){

        if( typeof(obj[key])=="number"){

            object[key]=obj[key];

        }
    }

    return object;
}
let obj = { name: "Saqib", age: 28, score: 33, active: "No" }

console.log(filter_object(obj));


