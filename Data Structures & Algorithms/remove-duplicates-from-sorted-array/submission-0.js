class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // previous element kaun se index par mila?
        let write = 0;

        // read poora array traverse karega...

        for(let read = 1; read<nums.length; read++){
            // agar element duplicate ho
            if(nums[write] != nums[read]){
                // element ko write karo prev unique element ki baad
                write++
                // abb write karo..
                nums[write] = nums[read]
            }else{
                continue;
            }
           
        }

        // write mei last unique element ka index store hoga
        return write + 1

        }
    
}
