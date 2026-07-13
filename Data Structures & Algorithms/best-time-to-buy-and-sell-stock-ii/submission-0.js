class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        // har profit compare karo
        for(let i = 0; i < prices.length; i++){
            // agar next price prev wale se bada ho toh profit warna ignore kardo
            if(prices[i + 1] > prices[i]){
                    // profit hai, warna ignore
                    profit += prices[i + 1] - prices[i];

            }

        }

        return profit;
        

    }
}
