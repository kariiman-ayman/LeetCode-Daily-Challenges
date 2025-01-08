var maxScore = function(s) {
    let ans = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let cur = 0;
        for (let j = 0; j <= i; j++) {
            if (s[j] == "0")
                cur++;
        }
        for (let k = i + 1; k < s.length; k++) {
            if (s[k] == "1")
                cur++;
        }
        ans = Math.max(ans, cur);
    }
    return ans;
};
