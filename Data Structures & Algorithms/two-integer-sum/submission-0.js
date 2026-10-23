class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let inverted = new Map();
        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            if(inverted.has(num)) return [inverted.get(num), i];
            let negated = target - num;
            inverted.set(negated, i);
        }
    }
}
