class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
//      */

// Time Complexity: O(n)

// - Reverse whole array → O(n)
// - Reverse first k elements → O(k)
// - Reverse remaining (n-k) elements → O(n-k)

// Total = O(n + k + (n-k)) = O(2n) = O(n)


// Space Complexity: O(1)

// - No extra array is created.
// - Only a few variables (left, right, n, k) are used.

    rotate(nums, k) {
        let len = nums.length;
        k = k % nums.length;

        // [A, B] = A (remaining part), B (part to be rotated in front)
        // we need to make it [B, A]

        // poora array reverse karo
        reverse(nums, 0, len- 1);

        // array ka first part reverse karo
        reverse(nums, 0, k-1)

        // array ka second part reverse karo
        reverse(nums, k, len-1)

        // reverse function
        function reverse(nums, left, right){
            while(left < right){
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
                right--
            }
        }
    }
}
