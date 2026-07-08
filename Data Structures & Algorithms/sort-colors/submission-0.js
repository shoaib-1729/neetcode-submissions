class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    // pattern: three pointer pattern 
    // pehchaan:
    // agar question mein sorting karne ko bola hai, lekin values bahut kam (2–4 categories) hain, to actual sorting mat socho — regions (partitions) socho.
    sortColors(nums) {
       // low, mid, high assign
       // mid current element ko track karega aur left aur right ko low aur high
       let low = 0, mid = 0;
       let high = nums.length - 1;

        // loop chalao jabtak mid chhota hai high se
        while(mid <= high){
            // agar mid pe 0 hua, toh usko left side shift karo
            // swap(low, mid) low++ mid++
            if(nums[mid] == 0){
                 [nums[low], nums[mid]] = [nums[mid], nums[low]]
                 low++;
                 mid++;
            }

            // agar mid element 1 hua, toh kuch matt karo
            else if(nums[mid] == 1){
                mid++;
            }

            // agar mid element 2 hua, toh usko right side shift karo
            else{
                // swap(mid, high)
                [nums[high], nums[mid]] = [nums[mid], nums[high]]

                // mid++ isiliye nahi kyuki humei nahi pata ki swap hoke left mei kaun sa element aaya hai, we need to recheck it...
                high--;
            }


        }
            return nums;
        

    }
}
