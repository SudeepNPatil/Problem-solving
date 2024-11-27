function find_index(arr,t)
{
    
    for(let i=0;i<=arr.length;i++)
    {
        if(t==arr[i])
        {
            return i;
        }
        
    }
    return -1;
}
let arr=[5,8,12,16];
console.log(find_index(arr,10));