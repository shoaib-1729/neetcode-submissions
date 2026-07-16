class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    /*
    Encode:
    Time Complexity (TC): O(n)
    Space Complexity (SC): O(n)
    -----------------------------------------
    Decode:
    Time Complexity (TC): O(n)
    Space Complexity (SC): O(n)
     */

  
    encode(strs) {
        let encoded = "";

        for(let str of strs){
             encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let res = []
      let i = 0

      while(i < str.length){
          let j = i;

          // hash dhudho kaha hai
          while(str[j] !== "#") j++

          // number nikaalo
          let length = Number(str.substring(i, j));

          // move after
          j++;

          // string read karo length tak aur res mei daaldo
          res.push(str.substring(j, j + length))

          // i ko badha do length se
          i = j + length;
      }

      return res;

        
    }
}
