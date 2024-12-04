let arr=[1,2,3,4,5,6,7,8];
function custom_filter(arr,callback){
    let new_array=[];
    for(let i=0;i<arr.length;i++)
    {
         let Even=callback(arr[i]);
         if (Even!=0){
            new_array.push(Even);
         }
    }
    return new_array;
}

function isEven(num){
    if(num%2==0){
        return num;
    }
    else{
        return 0;
    }
}

console.log(custom_filter(arr,isEven));