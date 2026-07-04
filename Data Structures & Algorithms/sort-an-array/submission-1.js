class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // implementing bubble sort
    // worst case time complexity: o(n^2)
    sortArray(nums) {
        let len = nums.length;
        let swapped = false
        
        for(let i = 0; i < len - 1; i++){

            for(let j = 0; j < len - 1 - i; j++){

                if(nums[j] > nums[j + 1]){

                    let temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                    swapped = true
                }
            }
            // agar koi bhi element swap nhi hua matlab array pehle se sorted hai
            if(!swapped) break
        }
  
        return nums
    }
}
