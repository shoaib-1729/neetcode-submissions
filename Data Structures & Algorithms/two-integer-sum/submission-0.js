class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map banao
        const map = new Map();


    for(let i=0; i<nums.length; i++){
         // compliment nikaalo target ka
        const compliment = target - nums[i];

        // agar complienent hai map mei toh uska index nikaalo
        if(map.has(compliment)){
            // return kardo value aur upar se joh index mil raha hai
            return [map.get(compliment), i]

        }

        // key: number, value: index
        map.set(nums[i], i)

    }
       
}
}