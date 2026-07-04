class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

// bootstrap code
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }

//     return false;


// optimised code
let set = new Set();

for(let val of nums){
    if(set.has(val)){
        return true;
    }
    set.add(val)
  }

  return false;

 }
}
