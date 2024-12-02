function isSorted(arr){

        let start=0;
        let end=arr.length-1;
        while(start<end)
        {
         if(arr[start]<arr[start+1])
            {
                start++;
            }
            else
            {
               return false;
            }   
        }
        
    return true;
}
let arr=[1,2,4,5,7];
console.log(isSorted(arr));