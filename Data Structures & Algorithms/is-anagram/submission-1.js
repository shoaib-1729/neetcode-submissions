class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // agar length barabar nahi hai tab toh pakke se anagram nahi hai
        if(s.length != t.length) return false;

        // agar length equal hai, count frequency of each character
        let count = {}

        for(let char of s){
            // agar char nahi hai count mei, toh 1 kardo
            // agar hai toh ek se badha do 
            count[char] = (count[char] || 0) + 1;
        }

        for(let char of t){
            // har char cancel kardo hai toh
            // nahi hai toh pakka anangram nahi hai
            if(!count[char]) return false;

            count[char]--;
        }

        // loop se bahar aa gaya matlab saare characters cancel ho gaye
        return true;
    }
}
