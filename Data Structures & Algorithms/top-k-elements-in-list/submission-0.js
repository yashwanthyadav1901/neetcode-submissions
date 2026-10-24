class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map();
        let output = [];
        for(let num of nums) {
            counter.set(num, (counter.get(num) || 0) + 1)
        }
        let entries = [...counter]
        let sorted = entries.sort((a,b) => b[1] - a[1]);
        for(let i = 0; i < k; i++){
            output.push(sorted[i][0])
        }
        return output;
    }
}
