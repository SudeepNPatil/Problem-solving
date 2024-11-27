function move_zero(arr) {

    let j=0;

    for(let i=0;i<=arr.length-1;i++)
    {
        if(arr[i]!=0)
        {
            arr[j]=arr[i];
            j++;
        }
    }
    for (;j<=arr.length-1;j++)
    {
        arr[j]=0;
    }
    return arr;
}
let arr=[2,0,0,4,0,1,3,5];
console.log(move_zero(arr));