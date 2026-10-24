
class Solution {
    productExceptSelf(nums) {
        let output = [];
        let leftProduct = [];
        let rightProduct = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                leftProduct[i] = 1;
            } else {
                leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                rightProduct[i] = 1;
            } else {
                rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] = leftProduct[i] * rightProduct[i];
        }

        return output;
    }
}
