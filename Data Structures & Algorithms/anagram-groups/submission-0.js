class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
           // map banao
            let map = new Map()

         for(let word of strs){

            // word ko sort karke key banao
            let key = word.split("").sort().join("");

            // map mei key nahi hai toh empty array value set karo
            if(!map.has(key)){
                map.set(key, [])
            }

            // agar key mil gayi toh uss word ko array mei push kardo
            map.get(key).push(word)


        
        }
        // return kardo value array
            return Array.from(map.values())
    }
}
