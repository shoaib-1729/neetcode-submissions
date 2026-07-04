class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        // pehli prefix ko base maan lege
        let prefix = strs[0]

        // array pe loop chalao
        for(let i=0; i<strs.length; i++){
            // agar prefix match nhi hua, toh usko chhota karte jaao
            // ho raha hai toh bss baaki elements ke saath check karte jaao
            while(strs[i].indexOf(prefix) != 0){
                // prefix ko chhota karo
                prefix = prefix.slice(0, prefix.length - 1);

                // agar prefix chhota karte karte kuch nahi bachta, then return ""
                if(prefix === ""){
                    return ""
                } 

            }
        }

        // loop ke bahar matlab sabpar check ho chuka hoga aur prefix empty nahi hua hoga
        return prefix;

    }
}
