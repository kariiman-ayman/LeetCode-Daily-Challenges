var countPrefixSuffixPairs = function(words) {
    const isPrefixAndSuffix = function(str1, str2) {
        if (str2.length < str1.length)
            return false;
        else
            return str2.startsWith(str1) && str2.endsWith(str1);
    }
    let ans = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j]))
                ans++;                
        }
    }
    return ans;
};