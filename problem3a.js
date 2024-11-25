let arr=[1,0,3,0,4,5];

function myfun(arr)
{
    let j=0;
    for(i=0;i<=arr.length;i++)
    {
        if(arr[i]!=0)
        {
            arr[j]=arr[i];
            j++;
        }
    }
    for(;j<=arr.length;j++)
    {
        arr[j]=0;
    }
    for(i=0;i<=arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}
myfun(arr);