class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // kyuki ans worst case mei bss 2 hi elements store karega...
    majorityElement(nums) {

        let candidate1 = nums[0];
        let candidate2 = nums[0];
        let vote1 = 0;
        let vote2 = 0;
        
        for(let i=0; i<nums.length; i++){
            if(nums[i] == candidate1)
                vote1++

            else if(nums[i] == candidate2) vote2++

            else if(vote1 == 0){
                candidate1 = nums[i]
                vote1 = 1
            }

            else if(vote2 == 0){
                candidate2 = nums[i]
                vote2 = 1 
            }

            else{
                vote1--
                vote2--
            }
        }


         // verify ki sach mei zyada hai ki nahi
        vote1 = 0
        vote2 = 0

        let ans = []

        for(let i=0; i<nums.length; i++){
            if(candidate1 == nums[i]) vote1++
            else if(candidate2 == nums[i]) vote2++
         }

        let count = Math.floor(nums.length / 3)

        if(vote1 > count) ans.push(candidate1)
        if(vote2 > count) ans.push(candidate2)

        return ans


    }
}
