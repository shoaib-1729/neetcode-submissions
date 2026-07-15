class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = {}
        let count = Math.floor(nums.length/3)
        let ans = []

        for(let val of nums){
            map[val] = (map[val] || 0) + 1
        }

         for(let val of nums){
            if(ans.includes(val)) continue
            if(map[val] > count) ans.push(val);
        }

        return ans

    }
}
