class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let output = 0;
        let i = 0;
        let j = heights.length - 1;
        
        while(i < j) {
            let height = Math.min(heights[i], heights[j]);
            let width = j - i;
            output = Math.max(output, height * width);

            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return output;
    }
}
