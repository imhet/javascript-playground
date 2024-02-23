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
