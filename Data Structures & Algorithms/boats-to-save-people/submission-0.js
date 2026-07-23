class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
//     TC:
// Sorting  -> O(n log n)
// Two Pointer Traversal -> O(n)

// Overall TC -> O(n log n)

// SC:
// O(1)
    numRescueBoats(people, limit) {
       let left = 0;
       let right = people.length - 1;
       // shuru mei zero boats to rescue
       let boat = 0;

       // sort the array
       people.sort((a, b) => a - b);

       while(left <= right){
          // agar limit se chhoti hoti hai ya barbar, toh bhej do boat se
          if(people[left] + people[right] <= limit){
             // boat se bhejke left aur right shift kardo
             left++
             right--
             boat++
          }else{
            // Agar lightest + heaviest > limi, to heaviest kisi ke saath nahi ja sakta.
            // isliye usse akela boat me bhej do.             
            // boat++ kardo aur agla element process karo
            right--
            boat++
          }
       }
          return boat;
    }
}
