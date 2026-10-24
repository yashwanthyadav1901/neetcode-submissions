class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let noDuplicates = [...numsSet];
        let sorted = noDuplicates.sort((a,b) => a - b);
        console.log(sorted)
        let counter = 1;
        let tempCounter = 1;
        if(nums.length == 0) return 0;
        for(let i = 1; i < sorted.length; i++){
            if(sorted[i] - sorted[i-1] === 1){
                tempCounter += 1;
            }else{
                tempCounter = 1;
            }
            if(tempCounter > counter){
                counter = tempCounter;
            }
        }
        return counter
    }
}
