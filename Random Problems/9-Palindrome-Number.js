var isPalindrome = function(x) {
    const char = String(x);
    let palindrome = true;
    let j = char.length - 1;
    for (let i = 0; i < Math.trunc(char.length / 2), j >= Math.trunc(char.length / 2); i++) {
        if (char[i] !== char[j])
            palindrome = false;
        j--;
    }
    return palindrome;
};