class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = []

        // pehle array ko sort karo
        nums.sort((a, b) => a - b);

        for(let i=0; i<nums.length-2; i++){
            let left = i + 1;
            let right = nums.length - 1;

            if(i > 0 && nums[i] === nums[i - 1]) continue
           
            while(left < right){
                // pehle sum nikaalo
                let sum = nums[left] + nums[right] + nums[i];

                // agar sum zero hai?
                if(sum === 0){
                    triplets.push([nums[left], nums[right], nums[i]])
                    left++
                    right--

                      // Left ke duplicates skip karo
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Right ke duplicates skip karo
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
                // agar sum zero se kam hai toh?
                else if(sum < 0){
                    // sum chhota hai zero se, sum ko bada bananna hai
                    left++
                }
                // agar sum zero se bada hai toh?
                else if(sum > 0){
                    // sum bada hai zero se, isko chhota banana hai
                    right--
                }
                
            }
        }

        return triplets;


    }
}
