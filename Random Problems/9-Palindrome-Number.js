var isPalindrome = function(x) {
    const string = String(x);
    let palindrome = true;
    let j = string.length - 1;
    for (let i = 0; i < Math.trunc(string.length / 2), j >= Math.trunc(string.length / 2); i++) {
        if (string[i] !== string[j])
            palindrome = false;
        j--;
    }
    return palindrome;
};