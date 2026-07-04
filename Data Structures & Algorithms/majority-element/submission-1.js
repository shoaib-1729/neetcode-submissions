class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {}

        for(let num of nums){
            // store karwado
            map[num] = (map[num] || 0) + 1

            // check highest freq wala ele
            let avgLen = nums.length / 2;

            if(map[num] > avgLen){
                return num;

            }
            
        }
       
       
    }
}
