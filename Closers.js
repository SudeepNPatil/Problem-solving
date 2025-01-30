let add=0;
function sum(a){
     add = add +a ;
    return (b) => {
        add = add+b;

        return (c) => {
            add = add+c;

            return (d) => {
                add = add+d;
                
                return () =>{
                
                    return add;
                }
            }
        }
    }
}


console.log(sum(1)(3)(4)(5)()); 