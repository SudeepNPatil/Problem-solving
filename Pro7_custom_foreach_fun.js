let arr=[10,20,30,40,50];

function multiplybytwo(num){
    return num*2;
}

function custom_for_each(arr,callback){
   
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
    
}
console.log(custom_for_each(arr,multiplybytwo));