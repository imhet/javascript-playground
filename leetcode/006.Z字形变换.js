// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
// 示例 1:
// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2：
// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"


// 解释：首先，我们创建一个数组 rows，用于存储每一行的字符。
// 然后，我们遍历给定的字符串 s，并将每个字符放入相应的行中，按照 Z 字形的顺序。
// 我们使用变量 currentRow 来跟踪当前所在的行，使用变量 goingDown 来判断当前字符是向下移动还是向上移动。
// 最后，我们将每一行的字符连接起来，形成最终的结果字符串。
// 算法复杂度分析：时间复杂度：O(n)，其中 n 是字符串的长度。我们只需要遍历一次给定的字符串 s。空间复杂度：O(n)，我们需要存储每一行的字符。

function convert(s, numRows) {
    if (numRows === 1) return s;
    
    const rows = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push([]);
    }
    
    let currentRow = 0;
    let goingDown = false;
    
    for (const char of s) {
        rows[currentRow].push(char);
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }
    
    let result = '';
    for (const row of rows) {
        result += row.join('');
    }
    
    return result;
}

// 测试用例
console.log(convert("LEETCODEISHIRING", 3)); // 输出: "LCIRETOESIIGEDHN"
console.log(convert("LEETCODEISHIRING", 4)); // 输出: "LDREOEIIECIHNTSG"
