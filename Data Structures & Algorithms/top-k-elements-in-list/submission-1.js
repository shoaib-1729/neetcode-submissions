class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        // map ki frequency set karo
        for(let val of nums){
             map[val] = (map[val] || 0) + 1;
        }

        // map ko array mei convert karo
        let arr = Object.entries(map);

        // make new array jismei answer push hoga
        let result = [];


       // array ko sort karo descending order mei (based on counts)
       arr.sort((a, b) => b[1] - a[1]);

       // top ke k frequents keys nikaalo usmei se
       for(let i=0; i<k; i++){
          // abb result mei push karo
          const keys = Number(arr[i][0])

          result.push(keys)
       }

    
        return result;
    }
}