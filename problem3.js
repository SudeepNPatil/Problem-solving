let arr=[1,0,3,2];

function myfun(arr)
{
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]==0 && arr[i+1]!=0)
        {
            let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
        }
    }

    for(i=0;i<=arr.length;i++)
    {
        console.log(arr[i]);
    }
}
myfun(arr);