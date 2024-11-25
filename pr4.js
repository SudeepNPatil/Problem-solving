
let arr=[1,2,3,4,5];
function myfun(arr){
let j=0;
for(i=arr.length;i>=0;i--)
{
    let temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    j++;
}
for(i=0;i<=arr.length;i++)
{
    console.log(arr[i]);
}
}
myfun(arr);