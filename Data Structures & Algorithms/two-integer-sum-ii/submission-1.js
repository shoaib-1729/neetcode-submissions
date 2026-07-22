class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    // time complexity: O(n)
    // space complexity: O(1)
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            // sum nikaalo dono elements ka
             let sum = numbers[left] + numbers[right];

            //  agar sum barabar hai target element se
            if(sum === target){
                return [left + 1, right + 1]
            }

            // agar sum chhota hai target se
            else if(sum < target){
                // sum ko badhao..
                left++
            }

            // agar sum bada hai target se..
            else if(sum > target){
                // sum ko chhota karo..
                right--;
            }
        }
    }
}
