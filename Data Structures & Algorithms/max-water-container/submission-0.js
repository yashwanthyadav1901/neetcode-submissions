class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let output = 0;
        let i = 0;
        let j = heights.length - 1;
        while (i < j){
            let height;
            if(heights[i] < heights[j]){
                height = heights[i];
            }else{
                height = heights[j];
            }
            let width = j - i;
            let totalWater = height * width;
            if(totalWater > output){
                output = totalWater;
            }
            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return output;
    }
}
