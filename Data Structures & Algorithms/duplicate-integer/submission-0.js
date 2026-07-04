class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();

        for(let val of nums){
            // if already present in set -> return true
            if(seen.has(val)){
                return true
            }
            // if not present in set -> add to set
            seen.add(val)
        }
        return false;
    }
}
