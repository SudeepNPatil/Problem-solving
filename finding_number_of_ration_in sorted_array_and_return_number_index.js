function rotation(array,target){
    let first = 0;
    let last = array.length -1 ;

    while(first<=last){

        
        let mid = Math.floor((first+last)/2);

        if(array[mid] == target){
            
            return mid 

        }
        else if(array[first] <= array[mid]){
            
            if(target >=array[first] && target <= array[mid]){
               
                last = mid-1;
            }
            else{
                first = mid+1;
            }
            
        }
        else {
           if(target >= array[mid] && target <= array[last]){
             first = mid + 1;
           }
           else{
            last = mid -1 ;
           }
        }
    }
    return -1 ;
}

let array =  [2,3,4,0,1];
let target = 0;
console.log(rotation(array,target));
