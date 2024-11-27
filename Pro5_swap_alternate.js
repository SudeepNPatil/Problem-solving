let arr=[2,4,5,6,7,8,9];
function swap_alternate(arr) {

    start=0;
    end=arr.length-1;

    while(start<end)
    {
        let temp=arr[start];
        arr[start]=arr[start+1];
        arr[start+1]=temp;
        
        start=start+2;
    }
    return arr;
}
console.log(swap_alternate(arr));