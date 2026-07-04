class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // agar length barabar nahi hai phir toh hohi nhi sakte
        if(s.length !== t.length) return false;

        // sort karo dono ko
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('')

        // abb compare karo, agar equal toh true else false
        return sortedS === sortedT

    }
}
