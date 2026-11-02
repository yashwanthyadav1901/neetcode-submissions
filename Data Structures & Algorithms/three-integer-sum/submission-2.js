class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a,b) => (a - b))
        let output = [];

        for(let i = 0; i < sorted.length; i++){
            if(sorted[i] === sorted[i-1]) continue;
            let j = i+1;
            let k = sorted.length - 1;
            while(j<k){
                if(sorted[i] + sorted[j] + sorted[k] === 0) {
                    output.push([sorted[i], sorted[j], sorted[k]])
                    j++;
                    k--;
                    while(j < k && sorted[j] === sorted[j-1]) j++;
                }
                if(sorted[i] + sorted[j] + sorted[k] > 0){
                    k--;
                }
                if(sorted[i] + sorted[j] + sorted[k] < 0){
                    j++;
                }
            }
        }
        return output;
    }
}
