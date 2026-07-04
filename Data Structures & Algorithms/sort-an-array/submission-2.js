class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // merge ko sort kardo
      return this.mergeSort(nums);

    }

    // divide karne ke liye array ko
    mergeSort(nums){
        if(nums.length <= 1){
            return nums
        }

        let mid = Math.floor(nums.length / 2)

       // left sorted array
        let left = this.mergeSort(nums.slice(0, mid))

    console.log(left)

        let right = this.mergeSort(nums.slice(mid))

        // sorted array ko merge karo
        return this.merge(left, right)
    }


    // divided array ko merge karne ke liye
    merge(left, right){
        let result = []

        let i = 0;
        let j = 0;

       // single elements ko merge karo (left and right branch)
        while(i < left.length && j < right.length){

            // joh chhota element hai use result mei push karo
            if(left[i] <= right[j]){
                result.push(left[i])
                i++
            }else{
                result.push(right[j])
                j++
            }
        }


       // muliple elements ko merge karo (left and right branch)
       while(i < left.length){
            result.push(left[i]);
            i++;
       }

       while(j < right.length){
           result.push(right[j])
            j++
       }

       // return arr
       return result;

    }
}
