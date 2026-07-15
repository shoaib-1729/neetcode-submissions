class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let size = nums.length;

        // step 1: clean the array 
        for(let i=0; i<nums.length; i++){
            if(nums[i] <= 0 || nums[i] > size){
                nums[i] = size + 1;
            }
        }

         // step 2: mark the presence 
        for(let i=0; i<nums.length; i++){
            let val = Math.abs(nums[i])

            if(val > size) continue

            if(nums[val - 1] > 0){
                nums[val - 1] = -nums[val - 1]

            }
        }

         // step 3: find the missing positive 
        for(let i=0; i<nums.length; i++){
            if(nums[i] > 0){
                return i + 1;
            }
        }

      return size + 1;

        
        
    }
}
