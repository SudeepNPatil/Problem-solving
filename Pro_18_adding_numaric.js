function adding_numaric(obj){
    let sum=0;
    for(let key in obj){
        if(typeof(obj[key])=="number"){

            sum = sum + obj[key];
         
        }
    }
    return sum;
}

let obj =  { apples: 5, bananas: 10, oranges: 8, name: "Saqib" }

console.log(adding_numaric(obj));