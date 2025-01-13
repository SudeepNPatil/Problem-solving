function Max_profit(prices){
    
    let max_profit=0;
    let profit;
    
    for(let i=0;i<prices.length;i++){

        for(let j=i+1;j<prices.length;j++){

            if(prices[i]>prices[j]){
                continue;
            }
            else{
                 profit= prices[j] - prices[i];
            }

            if(profit > max_profit){
                
                max_profit=profit;
            }
        }
    }
    return max_profit;
}

console.log(Max_profit( [6,8,1,2,30,19] ));