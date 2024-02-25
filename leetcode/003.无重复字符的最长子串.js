// 给定一个字符串，找出不含有重复字符的最长子串的长度。
// 示例：
// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是 3。
// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是 1。
// 给定 "pwwkew" ，最长子串是 "wke" ，长度是 3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。

// 这段代码实现了一个时间复杂度为 O(n) 的算法，其中 n 是输入字符串的长度。算法遍历一次输入字符串，使用一个滑动窗口来跟踪当前的子串，同时使用一个哈希表（seen）来存储字符及其最后出现的位置。
// 在遍历过程中，如果发现重复字符，就更新滑动窗口的起始位置。这样，整个算法的时间复杂度取决于字符串的长度，即 O(n)。
function lengthOfLongestSubstring(s) {
    if (!s) {
        return 0;
    }

    let maxLength = 0;
    let start = 0;
    let seen = {};

    for (let end = 0; end < s.length; end++) {
        if (s[end] in seen && start <= seen[s[end]]) {
            start = seen[s[end]] + 1;
        } else {
            maxLength = Math.max(maxLength, end - start + 1);
        }

        seen[s[end]] = end;
    }

    return maxLength;
}

// 示例用法
console.log(lengthOfLongestSubstring("abcabcbb"));  // 输出: 3
console.log(lengthOfLongestSubstring("bbbbb"));      // 输出: 1
console.log(lengthOfLongestSubstring("pwwkew"));     // 输出: 3
