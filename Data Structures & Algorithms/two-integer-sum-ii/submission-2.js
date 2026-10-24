class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let a = 0;
        let b = numbers.length - 1;
        while(a < b){
            if(numbers[a] + numbers[b] === target) {
                return [a + 1, b + 1];
            }
            if(numbers[a] + numbers[b] > target){
                b -= 1;
            }else{
                a += 1;
            }
        }
    }
}
