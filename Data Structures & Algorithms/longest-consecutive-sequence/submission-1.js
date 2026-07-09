class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // set banao
        let set = new Set(nums);

        let longest = 0;

        // check karo ki kaun se element ka previous element exist nhi katrta, wahi se sequence start hogi
        for(let num of set){        
            
            // jaha se sequence shuru hogi
            if(!set.has(num - 1)){
              let current = num;

              // sequence ki length ke liye
              let length = 1;

               // ab current se next element exist karta hai sequence mei?
               // karta toh update karte chalo current ko aur length ko
               while(set.has(current + 1)){
                     current++
                     length++
                }

                longest = Math.max(longest, length)
            }

            }   
        
        return longest;
         
    }
}
