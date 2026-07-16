class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let size = nums.length;

        // Step 1: Create a result array of size n and fill it with 1.
        let res = new Array(size).fill(1)
        
        // Step 2: Prefix Pass (Left → Right)
        let prefix = 1;   
        for(let i = 0; i<size; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        // Step 3: Suffix Pass (Right → Left)
        let suffix = 1;
        for(let i = size - 1; i >= 0; i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
}
