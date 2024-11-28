let arr=[2,7,11,15];
let target=9;
function two_sum(arr,target){

    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr.length;j++)
        {
           if (i==j){
            continue;
           }
           if(target==(arr[i]+arr[j])){
             let index1=i;
             let index2=j;
             return [index1,index2];
           }
           
        }
   }
}
console.log(two_sum(arr,target))