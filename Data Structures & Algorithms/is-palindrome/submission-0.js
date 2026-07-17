class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.trim().toLowerCase();

        s = s.replace(/[^a-zA-Z0-9]/g, "");

        // do pointers lelo, ismei mirror image wala concept lagega..
        let start = 0;
        let end = s.length - 1;

        let isPalindrome = true;

        while(start < end){
            if(s[start] != s[end]) isPalindrome = false;

            start++;
            end--;
        }

        return isPalindrome;
    }
}
