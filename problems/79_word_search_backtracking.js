/* 
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

const wordSearch = (board, word) => {
  const rows = board.length;
  const columns = board[0].length;
  const lettersToFind = word.split("");

  const findWord = (i, j, letterToFindIndex) => {
    if (i < 0 || i >= rows || j < 0 || j >= columns) return false;
    if (letterToFindIndex > lettersToFind.length - 1) return false;
    if (board[i][j] == "-" || board[i][j] !== lettersToFind[letterToFindIndex])
      return false;
    if (letterToFindIndex == lettersToFind.length - 1) return true;
    const temp = board[i][j];

    board[i][j] = "-";

    const found =
      findWord(i + 1, j, letterToFindIndex + 1) ||
      findWord(i - 1, j, letterToFindIndex + 1) ||
      findWord(i, j + 1, letterToFindIndex + 1) ||
      findWord(i, j - 1, letterToFindIndex + 1);

    board[i][j] = temp;
    return found;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] == lettersToFind[0]) {
        const foundWord = findWord(i, j, 0);
        if (foundWord) return true;
      }
    }
  }
  return false;
};

// console.log(wordSearch([["P", "A", "B", "Y"], ["S", "O", "C", "D"]], "ABCD"));
// console.log(wordSearch([["P", "A", "B", "C", "K"], ["U", "Y", "C", "T", "E"], ["I", "V", "D", "O", "R"], ["P", "F", "E", "K", "J"]], "ABCDE"));
// console.log(wordSearch([["P", "A", "B", "C", "K"], ["U", "Y", "C", "T", "E"], ["I", "V", "K", "O", "R"], ["P", "F", "K", "K", "J"]], "ABCDE"));
// console.log(wordSearch([["A", "B", "C"], ["P", "R", "U"], ["O", "A", "B"], ["T", "Y", "K"], ["R", "J", "C"], ["T", "A", "B"], ["E", "D", "C"], ["F", "P", "D"], ["A", "U", "I"], ["B", "C", "S"] ], "ABCDEF"));
// console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
// console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
// console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));
console.log(
  wordSearch(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
// console.log(wordSearch([], ""));

// P	A	B	Y
// S	O	C	Z

// P	A	B	C	K
// U	Y	C	T	E
// I	V	D	O	R
// P	F	E	K	J

// P	A	B	C	K
// U	Y	C	T	E
// I	V	K	O	R
// P	F	K	K	J

// A	B	C
// P	R	U
// O	A	B
// T	Y	K
// R	J	C
// T	A	B
// E	D	C
// F	P	D
// A	U	I
// B	C	S
