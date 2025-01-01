function isDuplicates(array){

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(i==j){
                continue;
            }
            if(array[i]==array[j]){
                return true;
            }
        }
    }
    return false;
}
let array=[1,2,3,4,5];
console.log(isDuplicates(array));