let arr=[10,2,4,6,8,16,0,7,15];
function maximum_value(arr) {
for(let i=0;i<arr.length;i++)
{
   let max=i;
  for(let j=i+1;j<arr.length;j++)
   {
      if(arr[max]<arr[j])
        {
          max=j;
        }
    }
     if(max!=i)
      {
      let temp=arr[i];
      arr[i]=arr[max];
       arr[max]=temp;
     }    
          
}
return arr[0];
}
console.log("the maximum value is : "+maximum_value(arr));
