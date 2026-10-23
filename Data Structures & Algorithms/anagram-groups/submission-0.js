class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = [];
        let output = [];
        
        for(let i = 0; i < strs.length; i++){
            let word = strs[i];
            sorted[i] = word.split("").sort().join("");
        }
        
        let visited = new Map();
        for(let i = 0; i < sorted.length; i++){
            let word = sorted[i];
            let similar = [strs[i]];
            if(visited.has(word)) continue;
            visited.set(word, i);
            for(let j = i + 1; j < sorted.length; j++){
                if(sorted[j] === word){
                    similar.push(strs[j]);
                }
            }
            output.push(similar);
        }
        return output;
    }
}
