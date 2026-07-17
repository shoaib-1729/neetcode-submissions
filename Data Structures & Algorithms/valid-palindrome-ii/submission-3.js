class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
         // helper function pata lagane ke liye ki koi string palindrome hai ki nahi..
         function isPalindrome(start, end){
            while(start < end){
                if(s[start] != s[end]) return false

                start++;
                end--;
            }
            return true;
         }

         // do pointers lo
         let start = 0;
         let end = s.length - 1;

         while(start < end){
            // same char hai toh aage badho
            if(s[start] === s[end]){
                start++;
                end--;
            }
            // jab pehla unequal char mile
            else{
                // option 1: left wala char skip karke baaki ka string ka palindrome check karo
                let skipLeft = isPalindrome(start + 1, end)

                // option 2: right wala char skip karke baaki ka string ka palindrome check karo
                let skipRight = isPalindrome(start, end - 1)

                // dono mei koi bhi palindrome hai toh true return kardo
                return skipLeft || skipRight;
            }

         }

           // agar string pehle se palindrome hai toh
            return true;


    }
}
