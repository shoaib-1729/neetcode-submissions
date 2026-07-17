class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let start = 0;
        let end = s.length-1;

        let temp;

        // do pointers lelo
        while(start < end){
            temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
        return s;
    }
}
