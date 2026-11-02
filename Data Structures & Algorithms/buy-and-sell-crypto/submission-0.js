class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i] < prices[l]){
                l = i;
            }else{
                profit = Math.max(profit, prices[i] - prices[l])
            }
        }
        return profit;
    }
}
