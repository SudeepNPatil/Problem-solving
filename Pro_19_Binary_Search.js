
    function Binary_search(array,key){

        let first = 0;
        
        let end = array.length-1

        while(first<=end){

            let mid = Math.floor((first + end) / 2 );

            if(array[mid] === key){

                return mid;
            }
            else if(array[mid] < key ){

                first = mid + 1 ;
            }
            else {
            
                end = mid - 1 ;
            
            }

        }
        return -1 ;
    }
    let array =  [-1,0,3,5,9,12];
    let key = 2;
    console.log(Binary_search(array,key));