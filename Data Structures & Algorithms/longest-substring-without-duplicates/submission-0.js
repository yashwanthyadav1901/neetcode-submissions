class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let maxLength = 0;
        let hashMap = new Map();
        while(r < s.length){
            
            if(hashMap.has(s[r])){
                l = Math.max(hashMap.get(s[r]) + 1, l)
            }
            
            hashMap.set(s[r], r);

            let subL = r - l + 1;
            maxLength = Math.max(maxLength, subL);
            r++;
        }
        return maxLength;
    }
}
