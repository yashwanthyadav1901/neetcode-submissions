class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphanumeric(str){
            return (
                (str >= "a" && str <= "z") ||
                (str >= "A" && str <= "Z") ||
                (str >= "0" && str <= "9")
            )
        }
        
        let final = ""
        for(let str of s){
            if(isAlphanumeric(str)){
                final += str.toLowerCase();
            }
            console.log(final)
        }
        return final === final.split("").reverse().join("");
    }
}
