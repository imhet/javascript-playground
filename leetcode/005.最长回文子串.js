// 用 js 实现以下算法，要求说明算法的复杂度，增加测试用例和注释
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
// 输入: "cbbd"
// 输出: "bb"


// 下面是中心扩展法
// 思路是以每个字符或者两个字符之间的空隙作为中心，向两边扩展判断是否构成回文串。这个方法的时间复杂度是 O(n^2)，因为有两重循环，但是实际运行速度可能会比动态规划更快。
// 还有一种马拉车算法是一种线性时间复杂度的算法，其核心思想是利用已经计算过的回文串信息，尽可能地避免重复计算。这个算法比较复杂，但是在性能上有很大的优势，尤其是在处理大规模字符串时。

function longestPalindrome(s) {
    if (s.length < 1) return "";
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// 测试用例
console.log(longestPalindrome("babad")); // 输出："bab" 或 "aba"
console.log(longestPalindrome("cbbd")); // 输出："bb"
console.log(longestPalindrome("abcba")); // 输出："abcba"
console.log(longestPalindrome("abc")); // 输出："a" 或 "b" 或 "c"
console.log(longestPalindrome("")); // 输出：""
