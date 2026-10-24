class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for(let str of strs){
            encodedString += str.length + "#" + str
        }
        console.log(encodedString);
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i = 0;
        while(i < str.length){
            let delimiter = str.indexOf("#", i);
            let num = Number(str.slice(i, delimiter))
            let start = delimiter + 1;

            let word = str.slice(start, start + num)
            decoded.push(word);
            i = start + num;
        }
        return decoded;
    }
}
