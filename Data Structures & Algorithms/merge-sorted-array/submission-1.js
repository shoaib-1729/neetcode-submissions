class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m - 1;
        let j = n - 1;
        let k = m + n - 1;

        // jabtak array1 aur array2 ke elements khatam nhi ho jaate tab tak push karte raho last mei...
        while(i >= 0 && j >= 0){
            // nums1 ke last mei daaldo joh bada ho
            if(nums1[i] > nums2[j]){
                nums1[k] = nums1[i];
                i--;
            }else{
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }

        // agar nums1 mei elements bach gaye
        while(j >= 0){
            // copy kardo
            nums1[k] = nums2[j]
            j--;
            k--;
        }
    }
}
