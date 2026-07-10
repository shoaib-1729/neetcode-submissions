class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // pehle map banao
        let map = new Map()
        
        // shuru mei prefixSum "0" ek baar aa chuka hai, toh set kardo 1 se
        map.set(0, 1);

        let prefixSum = 0;
        let count = 0;

        // loop chalao
        for(let num of nums){
            // prefix sum nikaalo
            prefixSum = prefixSum + num;
 
            // (prefixSum - k) => batata hai ki last index tak kitni baar woh subarray mile jinka sum "k" barabar tha...
            // bss usi ka count humein chahiye
            if(map.has(prefixSum - k)){
                count += map.get(prefixSum - k)
            }

            // set karo prefix sum ko map mei
            map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
        }

        return count;      
    }
}
