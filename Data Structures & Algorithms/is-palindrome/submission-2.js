class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
/*    
    Analysis:
        Time Complexity  : O(n)
        Space Complexity : O(1)
*/
    

    isPalindrome(s) {
        // do pointers lelo, ismei mirror image wala concept lagega..
        let start = 0;
        let end = s.length - 1;

        while(start < end){
            // agar start ka character alphanumeric nahi hai, toh usko skip karke aage badh jaao
            if(!(/[a-zA-Z0-9]/).test(s[start])){
                start++
                continue
            }

            // agar end ka character alphanumeric nahi hai, toh usko skip karke aage badh jaao
            if(!(/[a-zA-Z0-9]/).test(s[end])){
                end--
                continue
            }

            // agar alphanumeric hai toh
            if(s[start].toLowerCase() != s[end].toLowerCase()) return false;

            start++;
            end--;
        }

        return true;
    }
}
