var vowelStrings = function(words, queries) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const prefixSum = new Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        let cur = 0;
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1]))
            cur++;
        prefixSum[i + 1] = prefixSum[i] + cur;
    }
    const ans = [];
    for (let i = 0; i < queries.length; i++) {
        const res = prefixSum[queries[i][1] + 1] - prefixSum[queries[i][0]];
        ans.push(res);
    }
    return ans;
};