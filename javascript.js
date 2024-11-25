
function max_value() {
let arr=[""];
for(let i=0;i<=4;i++)
{
   arr[i]=parseInt(prompt("Enter the number to find the maximum value"));
  // arr.push(arr[i]);
}
for(let i=0;i<=4;i++)
{
   let min=i;
  for(let j=i+1;j<=4;j++)
   {
      if(arr[j]<arr[min])
        {
          min=j;
        }
    }
     if(min!=i)
      {
      let temp=arr[i];
      arr[i]=arr[min];
       arr[min]=temp;
     }    
          
}
//for(i=0;i<=4;i++)
//{
  //document.write(arr[i]);
//}
document.write("the maximum value is"+arr[4]);
}
max_value();
