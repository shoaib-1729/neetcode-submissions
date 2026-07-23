class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // do pointers approach laga rahe hai
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        // pehle check karo ki kiski height kam hai
        while(left < right){
            // width nilaalo, width humesha aage jaane par kam hogi
            let width = (right - left);

            // area nilaalo = (height * width)
            // chhoti height lege kyuki paani gir jaayega
            let currArea = Math.min(heights[left], heights[right]) * width;

            // max nikaalo
            maxWater = Math.max(currArea, maxWater);

            // agar height chhota ho toh
            if(heights[left] < heights[right]){
                // chhote waali height ko hatao, warna minimum badlega nhi kabhi
                left++
            }else{
                // right chhota hai phir right wale ko badhao..
                right--
            }

        }

        return maxWater


    }
}
