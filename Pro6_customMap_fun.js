let arr=[10,20,30,40,50];
let newarray=[];

function custom_Map(callback){
    
    for(let i=0;i<arr.length;i++){
        newarray.push(callback(arr[i]));
    }
    return newarray;
}

function mutiplybytwo(num){
    return num*2;
}

console.log(custom_Map(mutiplybytwo))