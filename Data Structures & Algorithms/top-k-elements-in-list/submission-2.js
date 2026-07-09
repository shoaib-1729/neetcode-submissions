class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // Time Complexity: O(n), because we count frequencies once, create buckets once, place each unique element into a bucket once, and traverse the buckets once.
    // Space Complexity: O(n), due to the frequency map and the bucket array. The result array takes O(k) space, but k ≤ n, so the overall space complexity remains O(n).
    topKFrequent(nums, k) {
        const map = new Map();

        // map karo frequency karo
        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        // bucket banao jaha index hoga frequency aur usko khaali array se iniliase kardo
        const bucket = Array(nums.length + 1)
                       .fill()
                       .map(() => [])
        
        // ab bucket mei freq store karwao
        for(let [num, count] of map){  
            // bucket mei push karo
            bucket[count].push(num);
        }

        let result = [];

        // bucket traverse karo peeche se 
        for(let i = bucket.length - 1; i >= 0; i--){

                // insert in bucket
                for(let num of bucket[i]){
                    result.push(num)
                }

               // agar top k jitne elements push ho gaye toh return kardo
               if(result.length == k){
                    return result
               }
        }


    }
}
