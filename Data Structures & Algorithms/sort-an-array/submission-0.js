class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // implementing bubble sort
    sortArray(nums) {
        let len = nums.length;
        
        for(let i = 0; i < len - 1; i++){

            for(let j = 0; j < len - 1 - i; j++){

                if(nums[j] > nums[j + 1]){

                    let temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
        }
  
        return nums
    }
}
