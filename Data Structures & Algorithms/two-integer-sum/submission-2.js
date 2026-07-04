class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

// bruteforce solution - time: O(n^2), space: O(1) 
    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = i + 1; j < nums.length; j++)
    //           if(nums[i] + nums[j] === target){
    //                return [i, j]
    //         }
    //     }

    // optimised solution 
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];

       // agar map mei mil gaya
        if(map.has(complement)){
            return [map.get(complement), i]
        }

        // agar nahi mila 
        map.set(nums[i], i)
       }
   }
}
