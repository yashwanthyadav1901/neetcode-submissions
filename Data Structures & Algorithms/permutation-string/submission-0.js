class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        // Build frequency arrays
        for (let r = 0; r < s1.length; r++) {
            s1Count[s1.charCodeAt(r) - 97]++;
            s2Count[s2.charCodeAt(r) - 97]++;
        }

        if (s1Count.join() === s2Count.join()) return true;

        let l = 0;

        // Sliding window
        for (let r = s1.length; r < s2.length; r++) {

            // Add incoming character
            s2Count[s2.charCodeAt(r) - 97]++;

            // Remove outgoing character
            s2Count[s2.charCodeAt(l) - 97]--;

            l++;

            if (s1Count.join() === s2Count.join()) return true;
        }

        return false;
    }
}