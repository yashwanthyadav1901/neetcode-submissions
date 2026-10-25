class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set());
        let columns = Array.from({length: 9}, () => new Set());
        let grid = Array.from({length: 9}, () => new Set());

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                let num = board[i][j];
                if(num === ".") continue;
                let boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
                if(rows[i].has(num) || columns[j].has(num) || grid[boxIndex].has(num)){
                    return false;
                }
                rows[i].add(num);
                columns[j].add(num);
                grid[boxIndex].add(num)
            }
        }
        return true;
    }
}
