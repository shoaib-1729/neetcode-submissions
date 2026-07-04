class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // map bana do
        let map = new Map()


        for(let word of strs){

           // array banado 26 characters ki
           let count = new Array(26).fill(0)

          // character ki freq count karo
           for(let char of word){
               count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
           }

           // count array se key banado
           let key = count.join("#")

          // agar map mei key nahi hai
          if(!map.has(key)){
              map.set(key, [])
          }

          // key ke array mei original word ko push kardo
          map.get(key).push(word)

        }

          // return kardo
          return Array.from(map.values())

    }
}
