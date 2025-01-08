function missingNumber(array){
   
    let n = array.length;
    
    let sum=(n*(n+1))/2;

   let Actualsum=0
    for(let i=0;i<array.length;i++){
     Actualsum = Actualsum+array[i];
    }

    let missednumber=sum-Actualsum;

    return missednumber;
}
console.log(missingNumber([1,3,0]));
//console.log(missingNumber([1]));
//console.log(missingNumber([3,0,4,2,1]));