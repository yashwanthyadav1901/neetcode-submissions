class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxLength = 0;
        let maxf = 0;
        let hashMap = new Map();

        for(let r = 0; r < s.length; r++){
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1);
            maxf = Math.max(hashMap.get(s[r]), maxf);

            while((r-l+1) - maxf > k){
                hashMap.set(s[l], hashMap.get(s[l]) - 1);
                l++;
            } 
            maxLength = Math.max(maxLength, (r-l+1))
        }
        return maxLength;
    }
}
