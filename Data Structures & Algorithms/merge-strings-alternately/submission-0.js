class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = "";
        let i = 0;
        let j = 0;

        // jab tak dono words mei characters hai
        while (i < word1.length && j < word2.length) {
            ans += word1[i] + word2[j];
            i++;
            j++;
        }

        // pehle word mei char bacha hoai toh ans mei merge kardo, i ke baad se continue karo..
        while (i < word1.length) {
            ans += word1[i];
            i++;
        }

        // agar dusre word mei char bacha hotoh ans mei merge kardo, j ke baad se continue karo..
        while (j < word2.length) {
            ans += word2[j];
            j++;
        }

        return ans;
    }
}
